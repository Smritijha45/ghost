"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-3 items-center">

     
        <div className="justify-self-start">
          <Link
            href="/"
            className="font-bold text-white tracking-wide hover:text-red-400 transition"
          >
            Ghost Recruiter 👻
          </Link>
        </div>

        <div className="justify-self-center flex items-center gap-10 text-sm text-gray-400">
          <a
            href="#why-it-works"
            className="hover:text-white transition"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-white transition"
          >
            How it works
          </a>
          <Link
            href="/login"
            className="hover:text-white transition"
          >
            Login
          </Link>
        </div>

     
        <div className="justify-self-end">
          <Link
            href="/dashboard"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold
                       bg-red-600 text-white
                       hover:bg-red-700
                       focus:outline-none focus:ring-2 focus:ring-red-500/60
                       transition shadow-lg shadow-red-500/20"
          >
            Get Started
          </Link>
        </div>

      </div>
    </nav>
  );
}