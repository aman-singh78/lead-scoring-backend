import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const getAIIntent = async (lead, offer) => {
  try {
    const prompt = `
    Given the product: ${
      offer.name
    }, with value props: ${offer.value_props.join(", ")}
    and ideal use cases: ${offer.ideal_use_cases.join(", ")},
    classify the buying intent of this prospect:

    Prospect: ${lead.name}, Role: ${lead.role}, Company: ${
      lead.company
    }, Industry: ${lead.industry}, Bio: ${lead.linkedin_bio}

    Return intent as one of: High, Medium, Low. Also give a one-sentence reasoning.
    `;

    const response = await client.chat.completions.create({
      model: "gpt-5-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const text = response.choices[0].message.content;
    let intent = "Low";
    let aiPoints = 10;
    if (text.includes("High")) {
      intent = "High";
      aiPoints = 50;
    } else if (text.includes("Medium")) {
      intent = "Medium";
      aiPoints = 30;
    }

    return { intent, aiPoints, reasoning: text };
  } catch (err) {
    console.error("AI Error:", err.message);
    return { intent: "Low", aiPoints: 0, reasoning: "AI service unavailable" };
  }
};
