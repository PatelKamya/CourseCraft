import express from "express";
import {
  createModule,
  getModulesByCourse,
  getModuleById,
  updateModule,
  deleteModule,
} from "../controllers/module.controller.js";

const router = express.Router();

// CREATE MODULE
router.post("/", createModule);

// GET ALL MODULES BY COURSE
router.get("/course/:course_id", getModulesByCourse);

// GET MODULE BY ID
router.get("/:id", getModuleById);

// UPDATE MODULE
router.put("/:id", updateModule);

// DELETE MODULE
router.delete("/:id", deleteModule);

export default router;