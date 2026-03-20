import { NextResponse } from "next/server";
import { extractTextFromPDF } from "@/lib/pdf";
import prisma from "@/lib/prisma";
import { analyzeResume } from "@/lib/gemini";

export async function POST(req: Request) {

  const formData = await req.formData();

  const file = formData.get("resume") as File;
  const companyType = formData.get("companyType") as string;

  const buffer = Buffer.from(await file.arrayBuffer());

  const text = await extractTextFromPDF(buffer);

  const aiResult = await analyzeResume(text, companyType);

  try {
    await prisma.analysis.create({
      data: {
        fileName: file.name,
        companyType,
        score: aiResult.score || 75,
        issues: aiResult.analysisText || "Analysis missing"
      }
    });
  } catch (err) {
    console.warn("Could not save to db", err);
  }

  return NextResponse.json({
    analysis: aiResult.analysisText || "Error parsing analysis",
    resumeText: text,
    companyType: companyType
  });
}