"use client";

import { useState } from "react";

export default function AccountPage() {
  const [name, setName] = useState("Alex Smith");
  const [email, setEmail] = useState("alex@example.com");

  return (
    <>
      {/* Header */}
      <h2 className="text-xl sm:text-2xl font-semibold text-white">
        Account
      </h2>
      <p className="mt-1 text-sm sm:text-base text-gray-400">
        Manage your profile and account settings.
      </p>

      {/* Profile Card */}
      <div className="mt-6 max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-white/10 border border-white/10" />
          <div>
            <p className="font-medium text-white">{name}</p>
            <p className="text-sm text-gray-500">Free Plan</p>
          </div>
        </div>

        {/* Form */}
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Full Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full
                rounded-md
                border border-white/20
                bg-black
                px-3 py-2
                text-sm
                text-white
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full
                rounded-md
                border border-white/20
                bg-black
                px-3 py-2
                text-sm
                text-white
                focus:outline-none
                focus:border-red-500/50
              "
            />
          </div>

          <button
            className="
              mt-4
              inline-flex
              items-center
              justify-center
              rounded-md
              bg-white/10
              border border-white/20
              px-5 py-2.5
              text-sm
              font-medium
              text-white
              hover:border-red-500/40
              hover:text-red-400
              transition
            "
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="mt-10 max-w-xl rounded-2xl border border-red-500/30 bg-red-500/5 backdrop-blur-xl p-6">
        <h3 className="font-semibold text-red-400">
          Danger Zone
        </h3>
        <p className="mt-1 text-sm text-gray-400">
          Deleting your account is permanent and cannot be undone.
        </p>

        <button
          className="
            mt-4
            rounded-md
            border border-red-500/40
            px-4 py-2
            text-sm
            text-red-400
            hover:bg-red-500/10
            transition
          "
        >
          Delete Account
        </button>
      </div>
    </>
  );
}