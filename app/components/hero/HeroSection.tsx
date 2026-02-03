export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-white px-6">
      <span className="mb-4 text-sm bg-gray-100 px-4 py-1 rounded-full">
        🟢 v1.0 Now Live
      </span>

      <h1 className="text-4xl md:text-5xl font-bold text-black max-w-3xl">
        Get Rejected by AI Before Recruiters Do.
      </h1>

      <p className="mt-4 text-gray-600 max-w-xl">
        Upload your resume and see exactly why recruiters would reject it —
        and how to fix it immediately.
      </p>

      <a
        href="/dashboard"
        className="mt-8 bg-black text-white px-6 py-3 rounded-md"
      >
        Analyze My Resume →
      </a>

      {/* ATS Preview Card */}
      <div className="mt-20 w-full max-w-5xl bg-white rounded-xl shadow-md flex overflow-hidden text-left">
        {/* Left Sidebar */}
        <div className="w-1/4 bg-gray-50 p-6 hidden md:block">
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-10 bg-gray-100 rounded" />
            <div className="h-10 bg-gray-100 rounded" />
            <div className="h-10 bg-gray-100 rounded" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 flex flex-col gap-6">
          <div>
            <div className="h-5 bg-gray-200 rounded w-1/3 mb-3" />
            <div className="h-3 bg-gray-100 rounded w-full mb-2" />
            <div className="h-3 bg-gray-100 rounded w-5/6" />
          </div>

          {/* Critical Issue */}
          <div className="bg-red-50 border border-red-200 p-5 rounded-lg">
            <h3 className="text-red-600 font-semibold mb-1">
              Critical Issue Detected
            </h3>
            <p className="text-red-500 text-sm">
              Your resume lacks quantifiable impact in the experience section.
            </p>
          </div>
        </div>

        {/* ATS Score */}
        <div className="w-48 flex flex-col items-center justify-center p-6">
          <div className="relative w-24 h-24 rounded-full border-4 border-gray-200 flex items-center justify-center">
            <span className="text-3xl font-bold">42</span>
            <div className="absolute inset-0 rounded-full border-4 border-red-500 border-t-transparent border-l-transparent rotate-45" />
          </div>
          <p className="mt-2 text-sm text-gray-500">ATS Score</p>
        </div>
      </div>
    </section>
  );
}