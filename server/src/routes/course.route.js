import express from "express";
const router = express.Router();

import {
  createCourseController,
  getAllCoursesController,
  getCourseByIdController,
  updateCourseController,
  deleteCourseController
} from "../controllers/course.controller.js";

// import authMiddleware from "../middlewares/auth.js";

// CREATE
router.post("/", createCourseController);

// GET ALL
router.get("/", getAllCoursesController);

// GET ONE
router.get("/:id", getCourseByIdController);

// UPDATE
router.put("/:id", updateCourseController);

// DELETE
router.delete("/:id", deleteCourseController);

export default router;