import { analyzeResume } from "../services/skill.service.js";
import SkillAnalysis from "../models/skill.model.js";


export const analyzeSkill = async (req, res) => {
  try {
    const { role } = req.body;
    const file = req.file;

    if (!file || !role) {
      return res.status(400).json({
        success: false,
        message: "Resume and role are required",
      });
    }

    const result = await analyzeResume(file.path, role);

    return res.json({
      success: true,
      data: result,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

export const getSkillHistory = async (req, res) => {
  try {
    const userId = req.user?.id;

    const data = await SkillAnalysis.find({ user_id: userId });

    res.json({
      success: true,
      data,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error fetching history",
    });
  }
};