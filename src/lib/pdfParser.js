import fs from "fs";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

// ✅ Correct import for pdf-parse in ESM
const pdfParse = require("pdf-parse/lib/pdf-parse.js");

export const parsePDF = async (filePath) => {
  // 1. Read file
  const buffer = fs.readFileSync(filePath);

  // 2. Parse PDF
  const data = await pdfParse(buffer);

  // 3. Safety check
  if (!data || !data.text) {
    throw new Error("Failed to extract text from PDF");
  }

  // 4. Clean text (important for AI)
  const cleanText = data.text.replace(/\s+/g, " ").trim();

  return cleanText;
};