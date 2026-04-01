"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ResultPage() {
  const router = useRouter();
  const [analysis, setAnalysis] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("resumeAnalysis");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setAnalysis(parsed.analysis);
        setResumeText(parsed.resumeText);
        setCompanyType(parsed.companyType);
      } catch (err) {
        console.error("Failed to parse resumeAnalysis from session storage:", err);
        sessionStorage.removeItem("resumeAnalysis");
        router.push("/dashboard");
      }
    }
  }, [router]);

  const fixResume = async () => {
    setLoading(true);

    const res = await fetch("/api/resume/fix", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ resumeText, companyType }),
    });

    let data;
    try {
      data = await res.json();
    } catch {
      alert("Received invalid response for rewriting resume.");
      setLoading(false);
      return;
    }

    if (!res.ok) {
      alert(data?.error || "Failed to fix resume.");
      setLoading(false);
      return;
    }

    sessionStorage.setItem(
      "fixedResume",
      JSON.stringify(data.improved)
    );

    setLoading(false);
    router.push("/dashboard/resume/fixed");
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight">
            AI Evaluation
          </h1>
          <p className="text-gray-500 mt-2">
            The recruiter has spoken. Read carefully.
          </p>
        </div>

        {/* Glass Card */}
        <div className="
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-2xl
          p-8
          shadow-[0_0_40px_rgba(0,0,0,0.6)]
          whitespace-pre-wrap
        ">
          <p className="text-gray-300 leading-relaxed">
            {analysis}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">

          <button
            onClick={fixResume}
            disabled={loading}
            className="
              bg-red-600
              hover:bg-red-700
              transition
              px-8
              py-3
              rounded-xl
              font-medium
              shadow-lg
              shadow-red-600/20
              ring-1
              ring-red-500/60
              disabled:opacity-60
            "
          >
            {loading ? "Rewriting Resume..." : "Fix My Resume"}
          </button>

          <button
            onClick={() => router.back()}
            className="
              bg-white/5
              border border-white/10
              hover:bg-white/10
              transition
              px-8
              py-3
              rounded-xl
              text-gray-400
            "
          >
            Go Back
          </button>

        </div>

      </div>
    </div>
  );
}
