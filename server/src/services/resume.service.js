import { improveResume } from "../services/resume.service.js";

export const improveResumeController = async (req, res) => {
  try {
    const file = req.file;
    const { role } = req.body;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "Resume is required",
      });
    }

    const result = await improveResume(file.path, role);

    res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
    });
  }
};