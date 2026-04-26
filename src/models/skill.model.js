import mongoose from "mongoose";

const skillAnalysisSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

   resume_file: {
    type:String
   },
   
  role: {
    type: String,
    required: true,
  },

  resume_text: {
    type: String,
  },

  extracted_skills: {
    type: [String],
    default: [],
  },

  missing_skills: {
    type: [String],
    default: [],
  },

  recommended_courses: {
    type: [String],
    default: [],
  },

}, {
  timestamps: true
});

export default mongoose.model("SkillAnalysis", skillAnalysisSchema);