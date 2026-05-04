import Module from "../models/module.model.js";

// CREATE MODULE
export const createModuleService = async (data) => {
  if (!data?.course_id) {
    throw new Error("Course ID is required");
  }

  if (!data?.title?.trim()) {
    throw new Error("Module title is required");
  }

  return Module.create(data);
};

// GET MODULES BY COURSE
export const getModulesByCourseService = (course_id) => {
  return Module.find({ course_id })
    .sort({ order: 1 })
    .lean();
};

// GET MODULE BY ID
export const getModuleByIdService = async (id) => {
  const module = await Module.findById(id).lean();

  if (!module) {
    throw new Error("Module not found");
  }

  return module;
};

// UPDATE MODULE
export const updateModuleService = async (id, data) => {
  if (!data || Object.keys(data).length === 0) {
    throw new Error("No data provided for update");
  }

  const module = await Module.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  }).lean();

  if (!module) {
    throw new Error("Module not found");
  }

  return module;
};

// DELETE MODULE
export const deleteModuleService = async (id) => {
  const module = await Module.findByIdAndDelete(id).lean();

  if (!module) {
    throw new Error("Module not found");
  }

  return module;
};  