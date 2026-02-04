"use client";

export default function ResumeResultPage() {
  const analysis =
    typeof window !== "undefined"
      ? sessionStorage.getItem("resumeAnalysis")
      : null;

  return (
    <div className="max-w-4xl mx-auto text-white p-6">
      <h1 className="text-2xl font-bold mb-4">
        Resume Feedback
      </h1>

      <pre className="bg-white/5 p-6 rounded-lg whitespace-pre-wrap">
        {analysis || "No analysis found"}
      </pre>
    </div>
  );
}