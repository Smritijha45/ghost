"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type HistoryItem = {
  id: string;
  companyType: string;
  score: number;
  issues: string;
  createdAt: string;
};

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadHistory() {
      try {
        const res = await fetch("/api/resume/history");
        let data;
        try {
          data = await res.json();
        } catch {
          throw new Error("Received malformed data from the server.");
        }

        if (!res.ok) throw new Error(data?.error || "Failed to fetch history");
        setHistory(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadHistory();
  }, []);

  // Helper to determine verdict from score
  const getVerdictDetails = (score: number) => {
    if (score >= 80) return { label: "Pass", style: "bg-green-500/10 text-green-400 border-green-500/20" };
    if (score >= 60) return { label: "Borderline", style: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" };
    return { label: "Rejected", style: "bg-red-500/10 text-red-400 border-red-500/20" };
  };

  return (
    <div className="w-full max-w-5xl mx-auto min-h-[70vh] relative">

      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-white mb-2">
          Analysis <span className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">History</span>
        </h2>
        <p className="text-gray-400 text-sm">
          Track your rejections. Learn, adapt, and eventually break through the ATS.
        </p>
      </div>

      {error ? (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-6 rounded-2xl flex items-center justify-center">
          Failed to load history: {error}
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-black/40 border-b border-white/10 uppercase tracking-wider text-xs text-gray-500 font-semibold">
              <tr>
                <th className="px-6 py-5">Target Company</th>
                <th className="px-6 py-5">ATS Score</th>
                <th className="px-6 py-5">AI Verdict</th>
                <th className="px-6 py-5 text-right">Date Generated</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/5">
              {loading ? (
                // Skeletons
                Array.from({ length: 4 }).map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td className="px-6 py-6"><div className="h-4 bg-white/5 rounded w-3/4"></div></td>
                    <td className="px-6 py-6"><div className="h-4 bg-white/5 rounded w-1/2"></div></td>
                    <td className="px-6 py-6"><div className="h-6 bg-white/5 rounded-full w-24"></div></td>
                    <td className="px-6 py-6 flex justify-end"><div className="h-4 bg-white/5 rounded w-24"></div></td>
                  </tr>
                ))
              ) : history.length === 0 ? (
                // Empty state
                <tr>
                  <td colSpan={4} className="px-6 py-16 text-center text-gray-400">
                    <div className="text-4xl mb-3 opacity-50">👻</div>
                    <p className="text-lg font-medium text-white mb-1">No resumes analyzed yet</p>
                    <p className="text-sm">Time to jump in and get your first brutal feedback.</p>
                    <Link href="/dashboard" className="inline-block mt-4 px-6 py-2 rounded-lg bg-red-600/20 text-red-400 border border-red-500/30 hover:bg-red-600/40 transition">
                       Analyze Now
                    </Link>
                  </td>
                </tr>
              ) : (
                // Data Rows
                history.map((item) => {
                  const verdict = getVerdictDetails(item.score);
                  const parsedDate = new Date(item.createdAt).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                  });

                  return (
                    <tr
                      key={item.id}
                      className="hover:bg-red-500/5 transition duration-200 group"
                    >
                      <td className="px-6 py-5 font-medium text-white/90">
                        {item.companyType}
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="text-white font-bold">{item.score}/100</div>
                          <div className="w-16 h-1.5 bg-black rounded-full overflow-hidden border border-white/5">
                            <div 
                              className={`h-full ${item.score >= 80 ? 'bg-green-500' : item.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'} shadow-[0_0_10px_inherit]`} 
                              style={{ width: `${item.score}%` }} 
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`inline-flex flex-shrink-0 items-center rounded-full border px-3 py-1 font-semibold text-[11px] tracking-wide uppercase ${verdict.style} shadow-lg`}>
                          {verdict.label}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right text-gray-500 font-medium">
                         {parsedDate}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}