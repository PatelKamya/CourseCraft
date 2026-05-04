import {
  createModuleService,
  getModulesByCourseService,
  getModuleByIdService,
  updateModuleService,
  deleteModuleService,
} from "../services/module.service.js";

// CREATE
export const createModule = async (req, res) => {
  try {
    const module = await createModuleService(req.body);

    res.status(201).json({
      success: true,
      data: module,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// GET BY COURSE
export const getModulesByCourse = async (req, res) => {
  try {
    const { course_id } = req.params;

    const modules = await getModulesByCourseService(course_id);

    res.json({ success: true, data: modules });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET BY ID
export const getModuleById = async (req, res) => {
  try {
    const module = await getModuleByIdService(req.params.id);

    res.json({ success: true, data: module });
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
};

// UPDATE
export const updateModule = async (req, res) => {
  try {
    const module = await updateModuleService(req.params.id, req.body);

    res.json({ success: true, data: module });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// DELETE
export const deleteModule = async (req, res) => {
  try {
    const module = await deleteModuleService(req.params.id);

    res.json({
      success: true,
      message: "Module deleted successfully",
      data: module,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
};