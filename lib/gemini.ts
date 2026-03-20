import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function analyzeResume(buffer: Buffer, companyType: string) {

  const model = genAI.getGenerativeModel({ 
    model: "gemini-2.5-flash",
    generationConfig: { responseMimeType: "application/json" } 
  });

  const prompt = `
You are an expert recruiter.

Analyze this resume for ${companyType} companies.

Return strictly in exactly this JSON format:
{
  "score": 85,
  "analysisText": "A detailed, multi-paragraph review evaluating the resume...",
  "transcribedText": "The full exact extracted text of the entire resume"
}
`;

  const pdfPart = {
    inlineData: {
      data: buffer.toString("base64"),
      mimeType: "application/pdf"
    }
  };

  const result = await model.generateContent([prompt, pdfPart]);
  const response = result.response.text();
  try {
    return JSON.parse(response);
  } catch(e) {
    return { score: 70, analysisText: response };
  }
}

export async function callGemini(prompt: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  const result = await model.generateContent(prompt);
  return result.response.text();
}