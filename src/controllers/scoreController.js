import Lead from "../models/Lead.js";
import Offer from "../models/Offer.js";
import { calculateRuleScore } from "../services/ruleEngine.js";
import { getAIIntent } from "../services/aiService.js";

export const scoreLeads = async (req, res) => {
  try {
    const { leadId } = req.body;

    const lead = await Lead.findById(leadId);
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    const offers = await Offer.find();
    const results = [];

    for (let offer of offers) {
      const ruleScore = calculateRuleScore(lead, offer);
      const { aiPoints, explanation } = await getAIIntent(lead, offer);
      const finalScore = ruleScore + aiPoints;

      results.push({
        offerId: offer._id,
        ruleScore,
        aiPoints,
        finalScore,
        intentExplanation: explanation,
      });
    }

    res.json({ leadId, scoredOffers: results });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error scoring lead", error: err.message });
  }
};

export const getResults = async (req, res) => {
  try {
    const results = await ScoredLead.find()
      .populate("lead")
      .populate("scoredOffers.offerId");
    res.json({ results });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error fetching scored results", error: err.message });
  }
};
