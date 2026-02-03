export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6">
      <div className="max-w-7xl mx-auto py-16 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        {/* Left */}
        <p className="text-gray-500">
          © 2024 <span className="text-white">Ghost Recruiter</span>. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6 text-gray-400">
          <a
            href="#"
            className="hover:text-white transition"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-white transition"
          >
            Terms
          </a>
          <a
            href="#"
            className="hover:text-white transition"
          >
            Twitter
          </a>
          <a
            href="#"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}