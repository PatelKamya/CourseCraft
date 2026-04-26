import Enrollment from "../models/enrollment-model.js";

// ✅ Enroll User
export const enrollUserService = async (user_id, course_id) => {
  // check already enrolled
  const existing = await Enrollment.findOne({ user_id, course_id });

  if (existing) {
    throw new Error("User already enrolled");
  }

  const enrollment = await Enrollment.create({
    user_id,
    course_id
  });

  return enrollment;
};

// ✅ Get My Courses
export const getMyCoursesService = async (user_id) => {
  return await Enrollment.find({ user_id })
    .populate("course_id");
};

// ✅ Check Enrollment
export const isEnrolledService = async (user_id, course_id) => {
  const enrollment = await Enrollment.findOne({ user_id, course_id });
  return !!enrollment;
};