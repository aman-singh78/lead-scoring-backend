import express from "express";
import { scoreLeads, getResults } from "../controllers/scoreController.js";
const router = express.Router();

router.post("/score", scoreLeads);
router.get("/results", getResults);

export default router;
