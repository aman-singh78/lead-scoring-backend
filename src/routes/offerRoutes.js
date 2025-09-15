import express from "express";
import { createOffer } from "../controllers/offerController.js";
const router = express.Router();

router.post("/offer", createOffer);

router.get("/offers", getOffers);

export default router;
