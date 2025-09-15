import Offer from "../models/Offer.js";

export const createOffer = async (req, res) => {
  try {
    const offer = await Offer.create(req.body);
    res.json(offer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getOffers = async (req, res) => {
  try {
    const offers = await Offer.find();
    res.json(offers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
