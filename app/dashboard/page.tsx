"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function ResumePage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [companyType, setCompanyType] = useState("Startup");
  const [loading, setLoading] = useState(false);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const analyzeResume = async () => {
    if (!file) return alert("Upload resume first");

    setLoading(true);

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("companyType", companyType);

    const res = await fetch("/api/resume/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    sessionStorage.setItem(
      "resumeAnalysis",
      JSON.stringify(data)
    );

    setLoading(false);
    router.push("/dashboard/resume/result");
  };

  return (
    <div className="text-white max-w-2xl w-full">

      <h2 className="text-2xl font-semibold">
        Resume Analysis
      </h2>

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={handleUpload}
      />

      {/* Upload + Select */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">

        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-4 py-2 bg-white/10 rounded"
        >
          Upload Resume
        </button>

        <select
          value={companyType}
          onChange={(e) => setCompanyType(e.target.value)}
          className="bg-black border px-2 py-2 rounded"
        >
          <option>Startup</option>
          <option>Mid-size</option>
          <option>Enterprise</option>
        </select>

      </div>

      {file && (
        <p className="text-sm text-gray-400 mt-2">
          Uploaded: {file.name}
        </p>
      )}

      <button
        onClick={analyzeResume}
        className="block mt-6 bg-red-600 px-6 py-3 rounded"
      >
        Analyze Resume
      </button>

      {loading && (
        <p className="mt-4 text-gray-400">
          Recruiter reviewing resume...
        </p>
      )}
    </div>
  );
}