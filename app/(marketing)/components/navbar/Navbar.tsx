"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-3 items-center">

        {/* Logo */}
        <div className="justify-self-start">
          <Link
            href="/"
            className="font-bold text-white tracking-wide hover:text-red-400 transition"
          >
            Ghost Recruiter 👻
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="justify-self-center hidden md:flex items-center gap-10 text-sm text-gray-400">
          <a href="#why-it-works" className="hover:text-white transition">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-white transition">
            How it works
          </a>
          <Link href="/login" className="hover:text-white transition">
            Login
          </Link>
        </div>

        {/* Desktop button */}
        <div className="justify-self-end hidden md:block">
          <Link
            href="/login"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold
                       bg-red-600 text-white
                       hover:bg-red-700
                       focus:outline-none focus:ring-2 focus:ring-red-500/60
                       transition shadow-lg shadow-red-500/20"
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger */}
        <div className="absolute right-6 md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 
        bg-zinc-950/95 backdrop-blur-xl border-l border-white/10 
        shadow-2xl shadow-black/80
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <div className="p-6 flex flex-col gap-6 text-gray-400">

          <button
            onClick={() => setOpen(false)}
            className="self-end text-white text-xl"
          >
            ✕
          </button>

          <a href="#why-it-works" className="hover:text-white transition">
            Features
          </a>

          <a href="#how-it-works" className="hover:text-white transition">
            How it works
          </a>

          <Link href="/login" className="hover:text-white transition">
            Login
          </Link>

          <Link
            href="/login"
            className="mt-4 px-5 py-2.5 rounded-lg text-sm font-semibold
                       bg-red-600 text-white
                       hover:bg-red-700
                       transition shadow-lg shadow-red-500/20"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}