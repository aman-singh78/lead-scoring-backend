import express from "express";
import multer from "multer";
import { uploadLeads } from "../controllers/leadController.js";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

router.post("/upload", upload.single("file"), uploadLeads);

export default router;
