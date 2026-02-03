"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-black">
          Ghost Recruiter 👻
        </Link>

        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#why-it-works">Features</a>
          <a href="#how-it-works">How It Works</a>
          <Link href="/login">Login</Link>

          <Link
            href="/dashboard"
            className="bg-black text-white px-4 py-2 rounded-md"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}