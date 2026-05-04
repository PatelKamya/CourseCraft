export const enrollCourse = async (req, res) => {
  try {
    const user_id = req.user.id; // from auth middleware
    const { course_id } = req.body;

    if (!course_id) {
      return res.status(400).json({
        success: false,
        message: "Course ID required"
      });
    }

    const enrollment = await Enrollment.create({
      user_id,
      course_id
    });

    return res.json({
      success: true,
      message: "Enrolled successfully",
      data: enrollment
    });

  } catch (err) {
    // handle duplicate enrollment
    if (err.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Already enrolled"
      });
    }

    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};