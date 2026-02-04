import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { extractTextFromPDF } from "@/lib/pdf";
import { analyzeResumeWithGemini } from "@/lib/gemini";

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

    // Save resume locally
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

    const filePath = path.join(uploadDir, file.name);
    fs.writeFileSync(filePath, buffer);

    // Extract text from PDF
    const resumeText = await extractTextFromPDF(buffer);

    // Analyze with Gemini
    const analysis = await analyzeResumeWithGemini(
      resumeText,
      companyType
    );

    return NextResponse.json({ analysis });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Resume analysis failed" },
      { status: 500 }
    );
  }
}