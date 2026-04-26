import express from "express";
import {
  enrollUser,
  getMyCourses,
  isEnrolled
} from "../controllers/enrollment-controller.js";

// import { authMiddleware } from "../middleware/auth-middleware.js";

const router = express.Router();

// Enroll in course
router.post("/enroll", enrollUser);

// Get my courses
router.get("/my-courses", getMyCourses);

// Check enrollment
router.get("/is-enrolled/:courseId", isEnrolled);

export default router;