"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, FileText, LogOut, Menu, X } from "lucide-react";
import { signOut } from "next-auth/react";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Leads", href: "/admin/leads", icon: Users },
  { label: "Quote Requests", href: "/admin/quotes", icon: FileText },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="flex items-center justify-between border-b border-[#0d3320]/10 bg-white px-4 py-3 lg:hidden">
        <div>
          <h2 className="text-sm font-semibold text-[#0d3320]">Apexon</h2>
          <p className="text-[11px] text-[#0d3320]/50">Admin panel</p>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="rounded-lg p-2 text-[#0d3320] transition hover:bg-[#0d3320]/5"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar — slide-in on mobile, static on desktop */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-[#0d3320]/10 bg-white transition-transform duration-300 ease-out lg:static lg:z-auto lg:w-60 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <div>
            <h2 className="text-sm font-semibold text-[#0d3320]">Apexon</h2>
            <p className="text-xs text-[#0d3320]/50 mt-0.5">Admin panel</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="rounded-lg p-1.5 text-[#0d3320]/60 transition hover:bg-[#0d3320]/5 lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 px-3">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
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
    </>
  );
}