"use client";

import { useRef, useState } from "react";

export default function ResumeAnalysisPage() {
  const [loading, setLoading] = useState(false);
  const [companyType, setCompanyType] = useState("Startup");
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl font-semibold text-white">
        Resume Analysis
      </h2>
      <p className="mt-1 text-sm sm:text-base text-gray-400">
        Get brutal feedback on your resume before you apply.
      </p>

      {/* Upload Box */}
      <div className="mt-6 md:mt-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-10 text-center shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
        <div className="mx-auto mb-4 h-12 w-12 md:h-14 md:w-14 rounded-full border border-white/20 flex items-center justify-center text-red-400">
          ☁️
        </div>

        <p className="font-medium text-white text-sm sm:text-base">
          Drag & drop your resume PDF
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Max file size 10MB
        </p>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          className="hidden"
        />

        <button
          onClick={() => fileInputRef.current?.click()}
          className="
            mt-5
            px-5 py-2.5
            rounded-md
            text-sm
            font-medium
            bg-white/10
            border border-white/20
            text-white
            hover:border-red-500/40
            hover:text-red-400
            transition
            w-full sm:w-auto
          "
        >
          Upload Resume
        </button>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <div>
          <label className="block text-sm text-gray-400 mb-1">
            Target Company Type
          </label>
          <select
            value={companyType}
            onChange={(e) => setCompanyType(e.target.value)}
            className="
              bg-black
              border border-white/20
              rounded-md
              px-3 py-2
              text-sm
              text-white
              focus:outline-none
              focus:border-red-500/50
              w-full sm:w-auto
            "
          >
            <option>Startup</option>
            <option>Mid-size</option>
            <option>Enterprise</option>
          </select>
        </div>

        <button
          onClick={() => setLoading(true)}
          className="
            sm:ml-auto
            bg-red-600
            hover:bg-red-700
            text-white
            px-6 py-3
            rounded-md
            text-sm
            font-medium
            transition
            w-full sm:w-auto
          "
        >
          Analyze Resume
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="mt-6 md:mt-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4">
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <span className="animate-spin">⏳</span>
            Recruiter is reviewing your resume...
          </div>

          <div className="mt-3 h-1 bg-white/10 rounded overflow-hidden">
            <div className="h-1 w-1/3 bg-red-500 rounded animate-pulse" />
          </div>
        </div>
      )}
    </>
  );
}