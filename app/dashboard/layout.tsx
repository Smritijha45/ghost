"use client";

import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-black flex-col md:flex-row text-white">

      {/* Sidebar / Mobile Navbar */}
      <aside className="w-full md:w-64 bg-black border-b md:border-b-0 md:border-r border-white/10 px-4 md:px-6 py-4 md:py-6 flex md:flex-col justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-lg font-bold mb-4 md:mb-8 flex items-center gap-2">
            <span className="text-white">Ghost Recruiter</span>
            <span className="text-red-400">👻</span>
          </h1>

          {/* Navigation */}
          <nav className="flex md:block gap-6 md:space-y-4 text-sm">

            <Link
              href="/dashboard"
              className="flex items-center gap-2 md:gap-3 font-medium text-white hover:text-red-400 transition"
            >
              📄 <span className="hidden md:inline">Analyze Resume</span>
            </Link>

            <Link
              href="/dashboard/history"
              className="flex items-center gap-2 md:gap-3 text-gray-400 hover:text-white transition"
            >
              🕘 <span className="hidden md:inline">History</span>
            </Link>

            <Link
              href="/dashboard/account"
              className="flex items-center gap-2 md:gap-3 text-gray-400 hover:text-white transition"
            >
              👤 <span className="hidden md:inline">Account</span>
            </Link>

          </nav>
        </div>

        {/* User */}
        <div className="flex items-center gap-3 text-sm mt-4 md:mt-0">
          <div className="h-10 w-10 rounded-full bg-white/10 border border-white/10" />
          <div className="hidden md:block">
            <p className="font-medium text-white">Alex Smith</p>
            <p className="text-xs text-gray-500">Free Plan</p>
          </div>
        </div>

      </aside>

      {/* Main */}
      <main className="flex-1 px-4 sm:px-6 md:px-12 py-6 md:py-10 bg-black">
        {children}
      </main>

    </div>
  );
}