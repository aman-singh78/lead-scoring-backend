import { CohereClientV2 } from "cohere-ai";
import dotenv from "dotenv";
dotenv.config();

const cohere = new CohereClientV2({
  token: process.env.COHERE_API_KEY,
});

export const getAIIntent = async (lead, offer) => {
  try {
    const userMessage = `
Given the lead:
Name: ${lead.name}
Role: ${lead.role}
Industry: ${lead.industry}
Company: ${lead.company}

And the offer:
Name: ${offer.name}
Value Props: ${offer.value_props.join(", ")}

Classify the buying intent as High, Medium, or Low.
Provide a 1-2 sentence explanation.
Respond ONLY in JSON like this:
{ "intent": "High", "explanation": "..." }
Do not include any extra text.
    `;

    const response = await cohere.chat({
      model: "command-a-03-2025",
      messages: [{ role: "user", content: userMessage }],
    });

    const text = response.message?.content?.[0]?.text?.trim();

    if (!text) {
      console.warn("Cohere returned no text:", response);
      return { aiPoints: 30, explanation: "Fallback Medium intent" };
    }

    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      console.warn("Failed to parse Cohere output as JSON:", text, err);
      return { aiPoints: 30, explanation: "Fallback Medium intent" };
    }

    let points = 0;
    if (data.intent === "High") points = 50;
    else if (data.intent === "Medium") points = 30;
    else points = 10;

    return { aiPoints: points, explanation: data.explanation || "" };
  } catch (err) {
    console.error("Cohere AI error:", err);
    return { aiPoints: 30, explanation: "Fallback Medium intent" };
  }
};
