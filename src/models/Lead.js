import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema({
  name: String,
  role: String,
  company: String,
  industry: String,
  location: String,
  linkedin_bio: String,
  score: Number,
  intent: String,
  reasoning: String,
});

export default mongoose.model("Lead", LeadSchema);
