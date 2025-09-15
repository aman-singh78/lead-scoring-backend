import mongoose from "mongoose";

const OfferSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value_props: [String],
  ideal_use_cases: [String],
});

export default mongoose.model("Offer", OfferSchema);
