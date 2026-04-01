"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const supabase = createClient();
  const [userName, setUserName] = useState("Ghost");
  const [plan, setPlan] = useState("Pro Plan");

  useEffect(() => {
    async function loadUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserName(user.user_metadata?.full_name || "Ghost");
        // E.g., fetch plan from a subscription table if needed, for now mock it.
      }
    }
    loadUser();
  }, [supabase.auth]);

  const navLinks = [
    { href: "/dashboard", label: "Analyze Resume", icon: "📄" },
    { href: "/dashboard/history", label: "History", icon: "🕘" },
    { href: "/dashboard/account", label: "Account", icon: "👤" },
  ];

  return (
    <div className="flex min-h-screen bg-black flex-col md:flex-row text-white font-sans selection:bg-red-500/30">

      {/* Sidebar */}
      <aside className="relative z-20 w-full md:w-72 bg-black/40 backdrop-blur-3xl border-b md:border-b-0 md:border-r border-white/5 px-6 py-8 flex md:flex-col justify-between shadow-[4px_0_24px_rgba(0,0,0,0.8)]">
        
        {/* Ambient Sidebar Glow */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute -left-20 top-20 w-64 h-64 bg-red-600/5 rounded-full blur-[80px]" />
        </div>

        <div>
          {/* Logo */}
          <Link href="/" className="group block mb-12">
            <h1 className="text-xl font-bold flex items-center gap-3 transition-transform group-hover:scale-105">
              <span className="text-white tracking-wide">Ghost Recruiter</span>
              <span className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse">👻</span>
            </h1>
          </Link>

          {/* Navigation */}
          <nav className="flex md:flex-col gap-2 md:gap-3 text-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300
                    ${isActive 
                      ? "bg-red-500/10 text-red-400 border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.1)] translate-x-1" 
                      : "text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/10 border border-transparent"
                    }
                  `}
                >
                  <span className={`text-lg ${isActive ? "drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" : "opacity-70"}`}>{link.icon}</span> 
                  <span className="hidden md:inline tracking-wide">{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Footer */}
        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-red-600/40 to-black border border-red-500/30 flex items-center justify-center shadow-lg shadow-red-500/20">
            <span className="text-sm font-bold text-white/90">{userName.charAt(0).toUpperCase()}</span>
          </div>
          <div className="hidden md:block">
            <p className="font-semibold text-white/90 text-sm">{userName}</p>
            <p className="text-xs text-red-400/80 font-medium tracking-wide">{plan}</p>
          </div>
        </div>

      </aside>

      {/* Main Content Area */}
      <main className="relative flex-1 px-4 sm:px-8 md:px-16 py-8 md:py-12 bg-black overflow-y-auto w-full">
         <div className="mx-auto max-w-5xl">
           {children}
         </div>
      </main>

    </div>
  );
}