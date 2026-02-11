"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function FixedPage() {
  const router = useRouter();
  const [resume, setResume] = useState("");

  useEffect(() => {
    const stored = sessionStorage.getItem("fixedResume");
    if (stored) {
      setResume(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight">
            Optimized Resume
          </h1>
          <p className="text-gray-500 mt-2">
            This version is ATS-friendly and impact-focused.
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
            {resume}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">

          <button
            onClick={() => router.push("/dashboard/resume")}
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
            "
          >
            Analyze Another Resume
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
            Back
          </button>

        </div>

      </div>
    </div>
  );
}
