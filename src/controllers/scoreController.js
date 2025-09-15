import Lead from "../models/Lead.js";
import Offer from "../models/Offer.js";
import { calculateRuleScore } from "../services/ruleEngine.js";
import { getAIIntent } from "../services/aiService.js";

export const scoreLeads = async (req, res) => {
  const offer = await Offer.findOne();
  const leads = await Lead.find();

  for (let lead of leads) {
    const ruleScore = calculateRuleScore(lead, offer);
    const { intent, aiPoints, reasoning } = await getAIIntent(lead, offer);
    lead.score = ruleScore + aiPoints;
    lead.intent = intent;
    lead.reasoning = reasoning;
    await lead.save();
  }
  res.json({ message: "Scoring complete" });
};

export const getResults = async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
};
