import fs from "fs";
import csv from "csv-parser";
import Lead from "../models/Lead.js";

export const uploadLeads = async (req, res) => {
  const leads = [];
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (row) => leads.push(row))
    .on("end", async () => {
      await Lead.insertMany(leads);
      res.json({ message: "Leads uploaded", count: leads.length });
    });
};
