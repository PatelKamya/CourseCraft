import express from "express";
import {
  createLesson,
  getLessonsByModule,
  getLessonById,
  updateLesson,
  deleteLesson,
} from "../controllers/lesson.controller.js";

const router = express.Router();

// CREATE LESSON
router.post("/", createLesson);

// GET LESSONS BY MODULE
router.get("/module/:module_id", getLessonsByModule);

// GET LESSON BY ID
router.get("/:id", getLessonById);

// UPDATE LESSON
router.put("/:id", updateLesson);

// DELETE LESSON
router.delete("/:id", deleteLesson);

export default router;