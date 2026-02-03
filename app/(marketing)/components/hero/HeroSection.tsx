export default function HeroSection() {
  return (
    <section className="relative min-h-screen  flex flex-col items-center text-center bg-black px-6 py-16 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Badge */}
      <span className="mb-6 text-xs uppercase tracking-wider
                       bg-white/5 border border-white/10
                       px-4 py-2 rounded-full text-gray-300 backdrop-blur">
        🟢 v1.0 Now Live
      </span>

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-white max-w-3xl leading-tight">
        Get Rejected by AI <br className="hidden md:block" />
        <span className="text-red-400">Before Recruiters Do.</span>
      </h1>

      {/* Subheading */}
      <p className="mt-5 text-gray-400 max-w-xl leading-relaxed">
        Upload your resume and see exactly why recruiters would reject it —
        and how to fix it <span className="text-white">before it costs you interviews</span>.
      </p>

      {/* CTA */}
      <a
        href="/dashboard"
        className="mt-10 inline-flex items-center gap-2
                   bg-red-600 hover:bg-red-700
                   text-white px-7 py-3 rounded-lg font-semibold
                   transition shadow-lg shadow-red-500/25
                   focus:outline-none focus:ring-2 focus:ring-red-500/60"
      >
        Analyze My Resume →
      </a>

      {/* ATS Preview Card */}
      <div className="relative mt-24 w-full max-w-4xl h-[560px]
                      bg-white/5 backdrop-blur-xl
                      rounded-2xl shadow-2xl
                      flex overflow-hidden text-left
                      border border-white/10">

        {/* Mac Window Header */}
        <div className="absolute top-0 left-0 w-full h-10
                        bg-black/40 backdrop-blur
                        flex items-center px-4 gap-2
                        border-b border-white/10 z-10">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* Left Sidebar */}
        <div className="pt-14 w-[22%] hidden md:flex flex-col gap-4
                        bg-white/5 p-6 border-r border-white/10">
          <div className="h-3 bg-white/20 rounded w-3/4" />
          <div className="h-3 bg-white/15 rounded w-1/2" />

          <div className="mt-4 space-y-3">
            <div className="h-10 bg-black/30 rounded-md border border-white/10" />
            <div className="h-10 bg-black/30 rounded-md border border-white/10" />
            <div className="h-10 bg-black/30 rounded-md border border-white/10" />
            <div className="h-10 bg-black/30 rounded-md border border-white/10" />
          </div>
        </div>

        {/* Main Content */}
        <div className="pt-14 flex-1 p-10 flex flex-col gap-8">
          {/* Skeleton */}
          <div>
            <div className="h-4 bg-white/20 rounded w-1/4 mb-4" />
            <div className="h-3 bg-white/10 rounded w-full mb-2" />
            <div className="h-3 bg-white/10 rounded w-11/12 mb-2" />
            <div className="h-3 bg-white/10 rounded w-4/5" />
          </div>

          {/* Critical Issue */}
          <div className="bg-red-500/10 border border-red-500/20
                          p-6 rounded-xl max-w-xl">
            <h3 className="text-red-400 font-semibold mb-2">
              Critical Issue Detected
            </h3>
            <p className="text-red-300 text-sm leading-relaxed">
              Your resume lacks quantifiable impact in the experience section.
            </p>
          </div>
        </div>

        {/* ATS Score */}
        <div className="pt-14 -mt-10 w-[220px]
                        flex flex-col items-center justify-center gap-2 pr-8">
          <div className="relative w-28 h-28 rounded-full
                          border-[6px] border-white/15
                          flex items-center justify-center">
            <span className="text-3xl font-bold text-white">42</span>

            <div className="absolute inset-0 rounded-full
                            border-[6px] border-red-500
                            border-t-transparent border-l-transparent
                            rotate-45" />
          </div>
          <p className="text-sm text-gray-400 mt-1">ATS Score</p>
        </div>

      </div>
    </section>
  );
}