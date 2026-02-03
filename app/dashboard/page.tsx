"use client";

import { useState } from "react";

export default function ResumeAnalysisPage() {
  const [loading, setLoading] = useState(false);
  const [companyType, setCompanyType] = useState("Startup");

  return (
    <>
      <h2 className="text-xl sm:text-2xl font-semibold text-black">
        Resume Analysis
      </h2>
      <p className="text-black mt-1 text-sm sm:text-base">
        Get brutal feedback on your resume before you apply.
      </p>

      {/* Upload Box */}
      <div className="mt-6 md:mt-8 border-2 border-dashed rounded-xl bg-white p-6 sm:p-8 md:p-10 text-center">
        <div className="mx-auto mb-4 h-12 w-12 md:h-14 md:w-14 rounded-full border flex items-center justify-center">
          ☁️
        </div>
        <p className="font-medium text-black text-sm sm:text-base">
          Drag & drop your resume PDF
        </p>
        <p className="text-xs text-gray-600 mt-1">
          Max file size 10MB
        </p>

        <button className="mt-4 px-4 py-2 border rounded-md text-sm hover:bg-gray-100 text-black w-full sm:w-auto">
          Upload Resume
        </button>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <div>
          <label className="block text-sm text-black mb-1">
            Target Company Type
          </label>
          <select
            value={companyType}
            onChange={(e) => setCompanyType(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm bg-white text-black w-full sm:w-auto"
          >
            <option>Startup</option>
            <option>Mid-size</option>
            <option>Enterprise</option>
          </select>
        </div>

        <button
          onClick={() => setLoading(true)}
          className="sm:ml-auto bg-black text-white px-6 py-3 rounded-md text-sm hover:bg-gray-800 w-full sm:w-auto"
        >
          Analyze Resume
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="mt-6 md:mt-8 bg-white border rounded-lg p-4">
          <div className="flex items-center gap-3 text-sm">
            <span className="animate-spin">⏳</span>
            Recruiter is reviewing your resume...
          </div>
          <div className="mt-3 h-1 bg-gray-200 rounded">
            <div className="h-1 w-1/3 bg-green-500 rounded animate-pulse" />
          </div>
        </div>
      )}
    </>
  );
}