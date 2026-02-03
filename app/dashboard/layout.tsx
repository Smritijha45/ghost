"use client";

import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50 flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r px-4 md:px-6 py-6 flex flex-col justify-between">
        <div>
          <h1 className="text-lg font-bold mb-6 md:mb-8 flex items-center gap-2 text-black">
            Ghost Recruiter <span>👻</span>
          </h1>

          <nav className="space-y-3 md:space-y-4 text-sm flex md:block justify-between">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 md:gap-3 font-medium text-black"
            >
              📄 <span className="hidden md:inline">Analyze Resume</span>
            </Link>

            <Link
              href="/dashboard/history"
              className="flex items-center gap-2 md:gap-3 text-black"
            >
              🕘 <span className="hidden md:inline">History</span>
            </Link>

            <Link
              href="/dashboard/account"
              className="flex items-center gap-2 md:gap-3 text-black"
            >
              👤 <span className="hidden md:inline">Account</span>
            </Link>
          </nav>
        </div>

        {/* User info */}
        <div className="flex items-center gap-3 text-sm mt-6 md:mt-0">
          <div className="h-10 w-10 rounded-full bg-gray-300" />
          <div className="hidden md:block">
            <p className="font-medium text-black">Alex Smith</p>
            <p className="text-black text-xs">Free Plan</p>
          </div>
        </div>
      </aside>

      {/* Main content changes here */}
      <main className="flex-1 px-4 sm:px-6 md:px-12 py-6 md:py-10">
        {children}
      </main>
    </div>
  );
}