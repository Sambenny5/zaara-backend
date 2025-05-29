import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import announcementRoutes from "./routes/announcementRoutes.js";
import contentRoutes from "./routes/contentRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/announcements", announcementRoutes);
app.use("/api/content", contentRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));