import {
  markLessonCompleteService,
  getCourseProgressService,
} from "../services/progress.service.js";

// MARK COMPLETE
export const markLessonComplete = async (req, res) => {
  try {
    const progress = await markLessonCompleteService(req.body);

    res.json({
      success: true,
      message: "Lesson marked as complete",
      data: progress,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// GET COURSE PROGRESS
export const getCourseProgress = async (req, res) => {
  try {
    const { user_id, course_id } = req.params;

    const progress = await getCourseProgressService(user_id, course_id);

    res.json({
      success: true,
      data: progress,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};