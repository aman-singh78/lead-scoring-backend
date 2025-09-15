import csv from "csv-parser";
import Lead from "../models/Lead.js";
import { Readable } from "stream";

export const uploadLeads = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const leads = [];

    const stream = Readable.from(req.file.buffer.toString());

    stream
      .pipe(csv())
      .on("data", (row) => leads.push(row))
      .on("end", async () => {
        await Lead.insertMany(leads);
        res.json({ message: "Leads uploaded", count: leads.length });
      })
      .on("error", (err) => {
        console.error(err);
        res.status(500).json({ message: "Error processing CSV file" });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
