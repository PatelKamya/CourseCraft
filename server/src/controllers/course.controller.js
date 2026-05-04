import {
  createCourseService,
  getAllCoursesService,
  getCourseByIdService,
  updateCourseService,
  deleteCourseService
} from "../services/course.service.js";

// CREATE
export const createCourseController = async (req, res) => {
  try {
    const instructor_id = "660000000000000000000001"; // temp

    const course = await createCourseService({
      ...req.body,
      instructor_id,
    });

    return res.status(201).json({
      success: true,
      message: "Course created",
      data: course,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL
export const getAllCoursesController = async (req, res) => {
  try {
    const courses = await getAllCoursesService();

    return res.status(200).json({
      success: true,
      data: courses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ONE
export const getCourseByIdController = async (req, res) => {
  try {
    const course = await getCourseByIdService(req.params.id);

    return res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE
export const updateCourseController = async (req, res) => {
  try {
    const course = await updateCourseService(req.params.id, req.body);

    return res.status(200).json({
      success: true,
      message: "Course updated",
      data: course,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE
export const deleteCourseController = async (req, res) => {
  try {
    await deleteCourseService(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Course deleted",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};