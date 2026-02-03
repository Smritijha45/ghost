export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
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
    </section>
  );
}