import Course from "../models/course-model.js";

// CREATE
export const createCourseService = async (data) => {
  if (!data.title || !data.instructor_id) {
    throw new Error("Title and instructor_id are required");
  }

  const course = await Course.create(data);
  return course;
};

// GET ALL
  export const getAllCoursesService = async () => {
    return await Course.find();
  };

// GET BY ID
export const getCourseByIdService = async (id) => {
  const course = await Course.findById(id).populate("instructor_id", "name");

  if (!course) {
    throw new Error("Course not found");
  }

  return course;
};

// UPDATE
export const updateCourseService = async (id, data) => {
  const course = await Course.findByIdAndUpdate(id, data, {
    new: true,
  });

  if (!course) {
    throw new Error("Course not found");
  }

  return course;
};

// DELETE
export const deleteCourseService = async (id) => {
  const course = await Course.findByIdAndDelete(id);

  if (!course) {
    throw new Error("Course not found");
  }
};