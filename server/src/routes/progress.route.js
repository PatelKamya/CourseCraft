import express from "express";
import {
  markLessonComplete,
  getCourseProgress,
} from "../controllers/progress.controller.js";

const router = express.Router();

// MARK LESSON COMPLETE
router.post("/complete", markLessonComplete);

// GET USER COURSE PROGRESS
router.get("/:user_id/:course_id", getCourseProgress);

export default router;