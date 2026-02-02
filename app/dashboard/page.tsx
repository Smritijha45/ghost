"use client";

import { useState } from "react";

export default function ResumeAnalysisPage() {
  const [loading, setLoading] = useState(false);
  const [companyType, setCompanyType] = useState("Startup");

  return (
    <div className="flex min-h-screen bg-gray-50 flex-col md:flex-row">
     
      <aside className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r px-4 md:px-6 py-6 flex flex-col justify-between">
        <div>
          <h1 className="text-lg font-bold mb-6 md:mb-8 flex items-center gap-2 text-black">
            Ghost Recruiter <span>👻</span>
          </h1>

          <nav className="space-y-3 md:space-y-4 text-sm flex md:block justify-between">
            <button className="flex items-center gap-2 md:gap-3 font-medium text-black">
              📄 <span className="hidden md:inline">Analyze Resume</span>
            </button>
            <button className="flex items-center gap-2 md:gap-3 text-black">
              🕘 <span className="hidden md:inline">History</span>
            </button>
            <button className="flex items-center gap-2 md:gap-3 text-black">
              👤 <span className="hidden md:inline">Account</span>
            </button>
          </nav>
        </div>

        
        <div className="flex items-center gap-3 text-sm mt-6 md:mt-0">
          <div className="h-10 w-10 rounded-full bg-gray-300" />
          <div className="hidden md:block">
            <p className="font-medium text-black">Alex Smith</p>
            <p className="text-black text-xs">Free Plan</p>
          </div>
        </div>
      </aside>

     
      <main className="flex-1 px-4 sm:px-6 md:px-12 py-6 md:py-10">
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
      </main>
    </div>
  );
}