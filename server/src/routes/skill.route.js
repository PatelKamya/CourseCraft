import express from "express";
import upload from "../middleware/upload.js";
import { analyzeSkill } from "../controllers/skill.controller.js";

const router = express.Router();

router.post("/skill-analyzer", upload.single("resume"), analyzeSkill);

export default router;