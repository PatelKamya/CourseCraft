import express from "express";
import multer from "multer";
import { improveResumeController } from "../controllers/resume.controller.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/improve-resume", upload.single("resume"), improveResumeController);

export default router;