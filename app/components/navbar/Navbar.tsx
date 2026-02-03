"use client";
import Link from "next/link";

export default function Navbar() {
  return (
   <nav className="fixed top-0 w-full bg-white/80 backdrop-blur border-b z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-3 items-center">
        
     
        <div className="justify-self-start">
          <Link href="/" className="font-bold text-black">
            Ghost Recruiter 👻
          </Link>
        </div>

        <div className="justify-self-center flex items-center gap-8 text-sm text-gray-600">
          <a href="#why-it-works" className="hover:text-black">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-black">
            How it works
          </a>
          <Link href="/login" className="hover:text-black">
            Login
          </Link>
        </div>

        <div className="justify-self-end">
          <Link
            href="/dashboard"
            className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800"
          >
            Get Started
          </Link>
        </div>

      </div>
    </nav>
  );
}