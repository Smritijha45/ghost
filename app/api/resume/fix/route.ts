import { NextResponse } from "next/server";
import { callGemini } from "@/lib/gemini";

export async function POST(req: Request) {
  try {
    const { resumeText, companyType } = await req.json();

    const prompt = `
You are an elite resume writer.

Rewrite this resume for a ${companyType} company.

Make it:
- ATS optimized
- Metric driven
- Strong action verbs
- Professional formatting
- Clear bullet points
- Impact focused

Keep it realistic.

Resume:
${resumeText}
`;

    const improved = await callGemini(prompt);

    return NextResponse.json({ improved });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Resume fixing failed" },
      { status: 500 }
    );
  }
}
