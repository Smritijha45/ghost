export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center px-6">
      
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-2">👻</div>
          <h1 className="text-2xl font-bold text-white">
            Welcome back
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            The AI remembers your resume.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="text-xs text-gray-400">
              Email
            </label>
            <input
              type="email"
              placeholder="you@domain.com"
              className="mt-1 w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/60"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-xs text-gray-400">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/60"
            />
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-700 transition text-white font-semibold tracking-wide"
          >
            Let the AI Judge Me →
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-400">
          No account?{" "}
          <a href="#" className="text-red-500 hover:text-red-400">
            Get rejected first
          </a>
        </div>

        {/* Threat line */}
        <p className="mt-6 text-xs text-center text-gray-500 italic">
          “Recruiters won’t tell you why. We will.”
        </p>
      </div>
    </div>
  );
}