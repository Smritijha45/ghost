import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { analyzeResume } from "@/lib/gemini";

export async function POST(req: Request) {

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();

  const file = formData.get("resume") as File;
  const companyType = formData.get("companyType") as string;
  const customPrompt = formData.get("customPrompt") as string; // Added dynamic prompt support

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  let aiResult;
  try {
    aiResult = await analyzeResume(buffer, companyType, customPrompt);
  } catch (error: any) {
    console.error("Gemini AI Error:", error);
    return NextResponse.json({ error: "Failed to parse resume with AI." }, { status: 500 });
  }

  try {
    const { error } = await supabase.from("Analysis").insert({
      user_id: user.id,
      fileName: file.name,
      companyType,
      score: aiResult.score || 75,
      issues: aiResult.analysisText || "Analysis missing"
    });
    if (error) throw error;
  } catch (err) {
    console.warn("Could not save to db", err);
  }

  return NextResponse.json({
    analysis: aiResult.analysisText || "Error parsing analysis",
    resumeText: aiResult.transcribedText || "",
    companyType: companyType
  });
}