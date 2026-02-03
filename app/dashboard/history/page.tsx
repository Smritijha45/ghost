"use client";

const historyData = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Startup",
    score: 62,
    verdict: "Rejected",
    date: "12 Feb 2024",
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Mid-size",
    score: 74,
    verdict: "Borderline",
    date: "05 Feb 2024",
  },
  {
    id: 3,
    role: "Full Stack Developer",
    company: "Enterprise",
    score: 88,
    verdict: "Pass",
    date: "28 Jan 2024",
  },
];

export default function HistoryPage() {
  return (
    <>
      {/* Header */}
      <h2 className="text-xl sm:text-2xl font-semibold text-white">
        Analysis History
      </h2>
      <p className="mt-1 text-sm sm:text-base text-gray-400">
        Previous resume evaluations and their outcomes.
      </p>

      {/* History Table */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 text-gray-400">
              <th className="px-6 py-4 text-left font-medium">Role</th>
              <th className="px-6 py-4 text-left font-medium">Company Type</th>
              <th className="px-6 py-4 text-left font-medium">ATS Score</th>
              <th className="px-6 py-4 text-left font-medium">Verdict</th>
              <th className="px-6 py-4 text-left font-medium">Date</th>
            </tr>
          </thead>

          <tbody>
            {historyData.map((item) => (
              <tr
                key={item.id}
                className="border-b border-white/5 last:border-none hover:bg-white/5 transition"
              >
                <td className="px-6 py-4 text-white">
                  {item.role}
                </td>
                <td className="px-6 py-4 text-gray-400">
                  {item.company}
                </td>
                <td className="px-6 py-4 text-white">
                  {item.score}%
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium
                      ${
                        item.verdict === "Pass"
                          ? "bg-green-500/10 text-green-400"
                          : item.verdict === "Borderline"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-red-500/10 text-red-400"
                      }
                    `}
                  >
                    {item.verdict}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty state hint (future-proof) */}
      {historyData.length === 0 && (
        <div className="mt-12 text-center text-gray-500 text-sm">
          No resume analyses yet.
        </div>
      )}
    </>
  );
}