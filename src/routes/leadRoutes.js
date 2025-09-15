import express from "express";
import multer from "multer";
import { uploadLeads } from "../controllers/leadController.js";

const upload = multer({ dest: "uploads/" });
const router = express.Router();

router.post("/upload", upload.single("file"), uploadLeads);

export default router;
