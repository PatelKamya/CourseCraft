import {
  enrollUserService,
  getMyCoursesService,
  isEnrolledService
} from "../services/enrollment.service.js";

// ✅ Enroll
export const enrollUser = async (req, res) => {
  try {
    const user_id = req.user.id; // from auth middleware
    const { course_id } = req.body;

    if (!course_id) {
      return res.status(400).json({
        success: false,
        message: "course_id is required"
      });
    }

    const data = await enrollUserService(user_id, course_id);

    return res.status(201).json({
      success: true,
      message: "Enrolled successfully",
      data
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// ✅ Get My Courses
export const getMyCourses = async (req, res) => {
  try {
    const user_id = req.user.id;

    const data = await getMyCoursesService(user_id);

    return res.status(200).json({
      success: true,
      data
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// ✅ Check Enrollment
export const isEnrolled = async (req, res) => {
  try {
    const user_id = req.user.id;
    const { courseId } = req.params;

    const enrolled = await isEnrolledService(user_id, courseId);

    return res.status(200).json({
      success: true,
      enrolled
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};