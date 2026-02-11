export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { extractTextFromPDF } from "@/lib/pdf";
import { callGemini } from "@/lib/gemini";



export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("resume") as File;
    const companyType = formData.get("companyType") as string;

    if (!file) {
      return NextResponse.json(
        { error: "Resume not uploaded" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const resumeText = await extractTextFromPDF(buffer);

    const prompt = `
You are a brutally honest recruiter reviewing a resume for a ${companyType} company.

Roast this resume in a sarcastic but helpful way.

Return response in this format:

1. ATS Score (out of 100)
2. Strengths
3. Weaknesses
4. Brutal Roast Paragraph

Resume:
${resumeText}
`;

    const analysis = await callGemini(prompt);

    return NextResponse.json({
      analysis,
      resumeText,
      companyType,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Resume analysis failed" },
      { status: 500 }
    );
  }
}
