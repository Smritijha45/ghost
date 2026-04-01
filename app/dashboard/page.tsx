"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const LOADING_STATES = [
  "Scanning format...",
  "Consulting the AI...",
  "Analyzing keywords...",
  "Judging your experience...",
  "Finalizing verdict...",
];

export default function ResumePage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [companyType, setCompanyType] = useState("Startup");
  const [loading, setLoading] = useState(false);
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);

  // Cycle through loading texts
  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setLoadingTextIndex((prev) => (prev + 1) % LOADING_STATES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [loading]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const analyzeResume = async () => {
    if (!file) return alert("Upload resume first");

    setLoading(true);
    setLoadingTextIndex(0);

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("companyType", companyType);

    try {
      const res = await fetch("/api/resume/analyze", {
        method: "POST",
        body: formData,
      });

      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error("Received an invalid response from the server.");
      }

      if (!res.ok) {
        throw new Error(data?.error || "Failed to analyze resume.");
      }

      sessionStorage.setItem("resumeAnalysis", JSON.stringify(data));
      router.push("/dashboard/resume/result");
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Failed to analyze resume.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center min-h-[70vh] relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Analyze Your <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">Resume</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto">
          Upload your PDF and let our AI rip it apart. Select the type of company you're targeting to tune the aggression level.
        </p>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={handleUpload}
      />

      {/* Main Card */}
      <div className="w-full bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden">
        
        {/* Animated processing overlay */}
        {loading && (
           <div className="absolute inset-0 bg-black/80 backdrop-blur-md z-20 flex flex-col items-center justify-center rounded-3xl">
              <div className="relative w-20 h-20 mb-6">
                 <div className="absolute inset-0 rounded-full border-[4px] border-white/10" />
                 <div className="absolute inset-0 rounded-full border-[4px] border-red-500 border-t-transparent animate-spin" />
                 <div className="absolute inset-2 rounded-full border-[4px] border-red-500/40 border-b-transparent animate-spin-reverse" />
              </div>
              <p className="text-red-400 text-lg font-medium tracking-widest animate-pulse h-8">
                {LOADING_STATES[loadingTextIndex]}
              </p>
           </div>
        )}

        <div className="flex flex-col gap-8">
          
          {/* Company Target Selector */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3 ml-1">
              Target Company Type
            </label>
            <div className="relative">
              <select
                value={companyType}
                onChange={(e) => setCompanyType(e.target.value)}
                disabled={loading}
                className="w-full appearance-none bg-black/50 border border-white/10 text-white px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all font-medium cursor-pointer"
              >
                <option value="Startup">🚀 Fast-paced Startup</option>
                <option value="Mid-size">🏢 Mid-size Tech / Agency</option>
                <option value="Enterprise">🏛️ Large Enterprise / FAANG</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                ▼
              </div>
            </div>
          </div>

          {/* Upload Dropzone */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3 ml-1">
              Resume Document
            </label>
            
            <div 
              onClick={() => !loading && fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl flex flex-col items-center justify-center p-10 cursor-pointer transition-all duration-300 group
                ${file 
                  ? 'border-red-500/50 bg-red-500/5 shadow-[0_0_30px_rgba(239,68,68,0.1)]' 
                  : 'border-white/20 hover:border-white/40 hover:bg-white/5 bg-black/30'
                }
              `}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110
                 ${file ? 'bg-red-500/20 text-red-500' : 'bg-white/10 text-white/70'}
              `}>
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {file ? (
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  ) : (
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  )}
                </svg>
              </div>
              
              <h3 className="text-white font-medium text-lg mb-1">
                {file ? "Resume Ready" : "Click to Upload PDF"}
              </h3>
              <p className={`text-sm ${file ? 'text-red-300' : 'text-gray-500'}`}>
                {file ? file.name : "We'll be brutal. PDF up to 5MB."}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={analyzeResume}
            disabled={!file || loading}
            className={`w-full py-4 rounded-xl text-white font-bold tracking-wide text-lg transition-all duration-300 shadow-xl
              ${!file 
                ? 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/5' 
                : 'bg-red-600 hover:bg-red-500 hover:shadow-red-500/40 border border-red-500/50 hover:scale-[1.02]'
              }
            `}
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>

        </div>
      </div>
    </div>
  );
}