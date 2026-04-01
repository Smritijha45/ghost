"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const router = useRouter();
  const supabase = createClient();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (user) {
        setName(user.user_metadata?.full_name || "");
        setEmail(user.email || "");
      }
      setLoading(false);
    }
    loadUser();
  }, [supabase.auth]);

  const handleSave = async () => {
    setUpdating(true);
    setMessage(null);
    const { error } = await supabase.auth.updateUser({
      data: { full_name: name },
    });

    if (error) {
      setMessage({ type: "error", text: error.message });
    } else {
      setMessage({ type: "success", text: "Profile updated successfully!" });
    }
    setUpdating(false);
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (!confirmDelete) return;

    setDeleting(true);
    try {
      const res = await fetch("/api/user/delete", {
        method: "DELETE",
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to delete account");
      }

      await supabase.auth.signOut();
      router.push("/");
    } catch (err: any) {
      setMessage({ type: "error", text: err.message });
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
         <div className="text-red-500 animate-pulse font-medium">Loading profile...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      {/* Glow Effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <h2 className="text-3xl font-bold text-white mb-2 z-10">Your Profile</h2>
      <p className="text-sm text-gray-400 mb-8 z-10">Manage your identity down below.</p>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-sm bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-8">
        
        {/* Avatar Placeholder */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-red-600/40 to-black/60 border border-red-500/30 flex items-center justify-center shadow-lg shadow-red-500/20">
             <span className="text-2xl font-bold text-white/80">{name.charAt(0)?.toUpperCase() || "👻"}</span>
          </div>
        </div>

        {message && (
          <div className={`mb-4 p-3 rounded-lg text-sm text-center border ${message.type === "error" ? "bg-red-500/20 border-red-500/50 text-red-400" : "bg-green-500/20 border-green-500/50 text-green-400"}`}>
            {message.text}
          </div>
        )}

        {/* Inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1 ml-1 uppercase tracking-wider">Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={updating}
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all font-medium"
            />
          </div>

          <div>
             <label className="block text-xs text-gray-400 mb-1 ml-1 uppercase tracking-wider">Email (Read Only)</label>
            <input
              value={email}
              readOnly
              disabled
              className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/5 text-gray-500 cursor-not-allowed font-medium"
            />
          </div>

          {/* Action Button */}
          <button
            onClick={handleSave}
            disabled={updating || deleting}
            className="w-full mt-4 py-3 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold tracking-wide transition-all shadow-lg shadow-red-500/30"
          >
            {updating ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="relative z-10 w-full max-w-sm mt-8 border border-red-500/20 bg-red-500/5 rounded-2xl p-6 text-center">
        <h3 className="font-semibold text-red-500 mb-1 text-sm">Danger Zone</h3>
        <p className="text-xs text-red-400/70 mb-4">Deleting your account is permanent.</p>
        <button
          onClick={handleDelete}
          disabled={deleting || updating}
          className="w-full py-2.5 rounded-xl border border-red-500/40 text-red-400 text-sm hover:bg-red-500/20 transition-all font-semibold"
        >
          {deleting ? "Deleting Account..." : "Delete Account"}
        </button>
      </div>

    </div>
  );
}