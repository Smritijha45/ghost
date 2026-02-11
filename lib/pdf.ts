// lib/pdf.ts

export async function extractTextFromPDF(buffer: Buffer) {
  const pdf = require("pdf-parse");
  const data = await pdf(buffer);
  return data.text;
}
