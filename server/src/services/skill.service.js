import SkillAnalysis from "../models/skill.model.js";
import { parsePDF } from "../lib/pdfParser.js";
import groq from "../utils/groq.js";

export const analyzeResume = async (filePath, role, userId) => {
  // 1. parse PDF
  const resumeText = await parsePDF(filePath);

  // 2. call Groq
  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content:
          "You are a career assistant. Always return ONLY valid JSON without explanation.",
      },
      {
        role: "user",
        content: `
Analyze this resume for the role: ${role}

Resume:
${resumeText}

Return ONLY JSON:
{
  "extracted_skills": [],
  "missing_skills": [],
  "recommended_courses": []
}
        `,
      },
    ],
  });

  const content = response.choices[0].message.content;

  console.log("AI RAW:", content); // debug

  // 3. extract JSON safely
  let result;
  try {
    const jsonMatch = content.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      throw new Error("Invalid AI response format");
    }

    result = JSON.parse(jsonMatch[0]);
  } catch (err) {
    throw new Error("AI response parsing failed");
  }

  // 4. save to DB
  const saved = await SkillAnalysis.create({
    user_id: userId,
    resume_file: filePath,
    role,
    resume_text: resumeText,
    extracted_skills: result.extracted_skills || [],
    missing_skills: result.missing_skills || [],
    recommended_courses: result.recommended_courses || [],
  });

  return saved;
};