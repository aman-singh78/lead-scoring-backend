import express from "express";
import cors from "cors";
import offerRoutes from "./routes/offerRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";
import scoreRoutes from "./routes/scoreRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", offerRoutes);
app.use("/api", leadRoutes);
app.use("/api", scoreRoutes);

export default app;
