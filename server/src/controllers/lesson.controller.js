import {
  createLessonService,
  getLessonsByModuleService,
  getLessonByIdService,
  updateLessonService,
  deleteLessonService,
} from "../services/lesson.service.js";

// CREATE
export const createLesson = async (req, res) => {
  try {
    const lesson = await createLessonService(req.body);

    res.status(201).json({
      success: true,
      data: lesson,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// GET BY MODULE
export const getLessonsByModule = async (req, res) => {
  try {
    const { module_id } = req.params;

    const lessons = await getLessonsByModuleService(module_id);

    res.json({ success: true, data: lessons });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET BY ID
export const getLessonById = async (req, res) => {
  try {
    const lesson = await getLessonByIdService(req.params.id);

    res.json({ success: true, data: lesson });
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
};

// UPDATE
export const updateLesson = async (req, res) => {
  try {
    const lesson = await updateLessonService(req.params.id, req.body);

    res.json({ success: true, data: lesson });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// DELETE
export const deleteLesson = async (req, res) => {
  try {
    const lesson = await deleteLessonService(req.params.id);

    res.json({
      success: true,
      message: "Lesson deleted successfully",
      data: lesson,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
};