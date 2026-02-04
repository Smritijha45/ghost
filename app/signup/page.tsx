"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center px-6 overflow-hidden">
      {/* 🔴 Ambient red glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-red-600/20 blur-[140px]" />

      <div
        className="
          relative
          w-full
          max-w-md
          rounded-2xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-8
          shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]
        "
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-white">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            The system will evaluate your resume honestly.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Alex Smith"
              className="
                w-full
                rounded-md
                border border-white/20
                bg-black
                px-3 py-2.5
                text-sm
                text-white
                placeholder:text-gray-500
                focus:outline-none
                focus:border-red-500/50
              "
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="alex@email.com"
              className="
                w-full
                rounded-md
                border border-white/20
                bg-black
                px-3 py-2.5
                text-sm
                text-white
                placeholder:text-gray-500
                focus:outline-none
                focus:border-red-500/50
              "
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Minimum 8 characters"
              className="
                w-full
                rounded-md
                border border-white/20
                bg-black
                px-3 py-2.5
                text-sm
                text-white
                placeholder:text-gray-500
                focus:outline-none
                focus:border-red-500/50
              "
            />
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="
              w-full
              mt-2
              rounded-md
              bg-red-600
              hover:bg-red-700
              px-4 py-3
              text-sm
              font-medium
              text-white
              transition
              ring-1 ring-red-500/40
            "
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-red-400 hover:text-red-300 transition"
          >
            Sign in
          </Link>
        </p>

        {/* Micro warning */}
        <p className="mt-6 text-center text-xs text-gray-500">
          By signing up, you agree to be evaluated honestly.
        </p>
      </div>
    </div>
  );
}