import Progress from "../models/progress.model.js";

// MARK LESSON COMPLETE
export const markLessonCompleteService = async (data) => {
  const { user_id, course_id, lesson_id } = data;

  if (!user_id || !course_id || !lesson_id) {
    throw new Error("user_id, course_id and lesson_id are required");
  }

  let progress = await Progress.findOne({ user_id, lesson_id });

  if (progress) {
    if (!progress.completed) {
      progress.completed = true;
      await progress.save();
    }
  } else {
    progress = await Progress.create({
      user_id,
      course_id,
      lesson_id,
      completed: true,
    });
  }

  return progress.toObject();
};

// GET USER PROGRESS (FOR A COURSE)
export const getCourseProgressService = async (user_id, course_id) => {
  const progress = await Progress.find({
    user_id,
    course_id,
    completed: true,
  }).lean();

  return progress;
};