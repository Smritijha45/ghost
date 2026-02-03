"use client";

import { useState } from "react";

export default function AccountPage() {
  const [name, setName] = useState("Alex Smith");
  const [email, setEmail] = useState("alex@example.com");

  return (
    <>
      <h2 className="text-xl sm:text-2xl font-semibold text-black">
        Account
      </h2>
      <p className="text-black mt-1 text-sm sm:text-base">
        Manage your profile and account settings.
      </p>

      {/* Profile Card */}
      <div className="mt-6 bg-white border rounded-xl p-6 max-w-xl">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-gray-300" />
          <div>
            <p className="font-medium text-black">{name}</p>
            <p className="text-sm text-gray-600">Free Plan</p>
          </div>
        </div>

        {/* Form */}
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm text-black mb-1">
              Full Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-sm text-black"
            />
          </div>

          <div>
            <label className="block text-sm text-black mb-1">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-sm text-black"
            />
          </div>

          <button className="mt-4 bg-black text-white px-5 py-2 rounded-md text-sm hover:bg-gray-800">
            Save Changes
          </button>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="mt-10 max-w-xl border border-red-200 bg-red-50 rounded-xl p-6">
        <h3 className="font-semibold text-red-600">Danger Zone</h3>
        <p className="text-sm text-red-500 mt-1">
          Deleting your account is permanent and cannot be undone.
        </p>

        <button className="mt-4 text-sm text-red-600 border border-red-300 px-4 py-2 rounded-md hover:bg-red-100">
          Delete Account
        </button>
      </div>
    </>
  );
}