"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { User, LogOut, ChevronDown, LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function AccountButton() {
  const { data: session, status } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);

  if (status === "loading") return null;
  if (!session) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
      >
        <User size={16} />
        {session.user?.email?.split("@")[0] ?? "Account"}
        <ChevronDown size={14} />
      </button>

     {showDropdown && (
        <div className="absolute right-0 top-[110%] z-50 min-w-[180px] rounded-xl border border-[#0d3320]/10 bg-white p-2 shadow-2xl">
          <div className="px-3 py-2 text-xs text-[#0d3320]/60">
            {session.user?.email}
          </div>

          {(session.user as any)?.role === "admin" && (
            <Link
              href="/admin"
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-[#0d3320] transition hover:bg-[#0d3320]/5"
              onClick={() => setShowDropdown(false)}
            >
              <LayoutDashboard size={15} />
              Admin panel
            </Link>
          )}

          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 transition hover:bg-red-50"
          >
            <LogOut size={15} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}