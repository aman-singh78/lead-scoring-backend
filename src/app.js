import express from "express";
import cors from "cors";
import offerRoutes from "./routes/offerRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", offerRoutes);
app.use("/api", leadRoutes);

export default app;
