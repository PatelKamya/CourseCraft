import Lesson from "../models/lesson.model.js";

// CREATE LESSON
export const createLessonService = async (data) => {
  if (!data?.module_id) {
    throw new Error("Module ID is required");
  }

  if (!data?.title?.trim()) {
    throw new Error("Lesson title is required");
  }

  return Lesson.create(data);
};

// GET LESSONS BY MODULE
export const getLessonsByModuleService = (module_id) => {
  return Lesson.find({ module_id })
    .sort({ order: 1 })
    .lean();
};

// GET LESSON BY ID
export const getLessonByIdService = async (id) => {
  const lesson = await Lesson.findById(id).lean();

  if (!lesson) {
    throw new Error("Lesson not found");
  }

  return lesson;
};

// UPDATE LESSON
export const updateLessonService = async (id, data) => {
  if (!data || Object.keys(data).length === 0) {
    throw new Error("No data provided for update");
  }

  const lesson = await Lesson.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  }).lean();

  if (!lesson) {
    throw new Error("Lesson not found");
  }

  return lesson;
};

// DELETE LESSON
export const deleteLessonService = async (id) => {
  const lesson = await Lesson.findByIdAndDelete(id).lean();

  if (!lesson) {
    throw new Error("Lesson not found");
  }

  return lesson;
};