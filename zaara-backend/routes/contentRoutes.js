import express from "express";
import { getContent, createContent } from "../controllers/contentController.js";

const router = express.Router();

router.get("/", getContent);
router.post("/", createContent);

export default router;