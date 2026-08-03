"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, FileText, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Leads", href: "/admin/leads", icon: Users },
  { label: "Quote Requests", href: "/admin/quotes", icon: FileText },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-60 flex-col border-r border-[#0d3320]/10 bg-white">
      <div className="px-5 py-5">
        <h2 className="text-sm font-semibold text-[#0d3320]">Apexon</h2>
        <p className="text-xs text-[#0d3320]/50 mt-0.5">Admin panel</p>
      </div>

      <nav className="flex-1 px-3">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 px-3 py-2.5 mb-1 text-sm transition ${
                isActive
                  ? "border-l-2 border-[#0d3320] bg-[#0d3320]/[0.04] font-medium text-[#0d3320]"
                  : "border-l-2 border-transparent text-[#0d3320]/60 hover:bg-[#0d3320]/[0.03] hover:text-[#0d3320]"
              }`}
            >
              <Icon size={16} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-[#0d3320]/10 p-3">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-[#0d3320]/60 transition hover:bg-[#0d3320]/[0.04] hover:text-[#0d3320]"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
}