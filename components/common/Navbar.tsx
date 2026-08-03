"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { MAIN_NAV } from "@/constants/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "./Container";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useNav } from "@/context/NavContext";
import { navConfig } from "@/config/nav.config";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";
import AccountButton from "../auth/AccountButton";

export function Navbar() {
  const scrolled = useScrollPosition(navConfig.stickyScrollThreshold);
  const { isMobileMenuOpen, setMobileMenuOpen, activeMegaMenu, setActiveMegaMenu } = useNav();

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#0d3320]/95 shadow-lg backdrop-blur-md"
          : "bg-[#0d3320]"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative flex shrink-0 items-center">
          <Image
            src="/apexon-logo-white.svg"
            alt="Apexon"
            width={200}
            height={64}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setActiveMegaMenu(null)}>
          {MAIN_NAV.map((item) => (
            <div key={item.label} className="relative" onMouseEnter={() => item.megaMenu && setActiveMegaMenu(item.label)}>
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
                {item.megaMenu && <ChevronDown size={14} />}
              </Link>

              <AnimatePresence>
                {item.megaMenu && activeMegaMenu === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 top-full mt-3 w-[640px] -translate-x-1/2 rounded-2xl border border-[#0d3320]/10 bg-white p-6 shadow-2xl"
                  >
                    <div className={cn("grid gap-8", item.megaMenu.featured ? "grid-cols-4" : "grid-cols-3")}>
                      {item.megaMenu.columns.map((column) => (
                        <div key={column.title}>
                          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#0d3320]/40">
                            {column.title}
                          </p>
                          <ul className="flex flex-col gap-2">
                            {column.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="text-sm text-[#0d3320]/75 transition hover:text-[#0d3320]"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {item.megaMenu.featured && (
                        <Link href={item.megaMenu.featured.href} className="group">
                          <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-[#0d3320] to-[#0a2818]" />
                          <p className="mt-3 text-sm font-medium text-[#0d3320] group-hover:text-[#d4a574]">
                            {item.megaMenu.featured.title}
                          </p>
                          <p className="text-xs text-[#0d3320]/50">{item.megaMenu.featured.description}</p>
                        </Link>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <AccountButton />
          </div>

          <div className="hidden lg:block">
            <Button
              href="/book-consultation"
              size="sm"
              className="bg-[#d4a574] text-[#0d3320] hover:bg-[#c08f5a]"
            >
              Book a Consultation
            </Button>
          </div>

          <button
            aria-label="Toggle navigation menu"
            className="rounded-full p-2 text-white transition hover:bg-white/10 lg:hidden"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      <MobileMenu />
    </header>
  );
}

function MobileMenu() {
  const { isMobileMenuOpen, setMobileMenuOpen } = useNav();

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden border-t border-white/10 bg-[#0d3320] lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10"
            >
              Contact
            </Link>

            <div className="mt-3 flex flex-col gap-3 border-t border-white/10 px-3 pt-4">
              <MobileAccountSection onNavigate={() => setMobileMenuOpen(false)} />
              <Button
                href="/book-consultation"
                size="sm"
                className="w-full bg-[#d4a574] text-[#0d3320] hover:bg-[#c08f5a]"
              >
                Book a Consultation
              </Button>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MobileAccountSection({ onNavigate }: { onNavigate: () => void }) {
  const { data: session } = useSession();

  if (!session) return null;

  const role = (session.user as any)?.role;

  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
      <p className="mb-2 truncate px-1 text-xs text-white/60">{session.user?.email}</p>
      <div className="flex flex-col gap-1">
        {role === "admin" && (
          <Link
            href="/admin"
            onClick={onNavigate}
            className="rounded-md px-2 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Admin panel
          </Link>
        )}
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="rounded-md px-2 py-2 text-left text-sm font-medium text-red-300 transition hover:bg-white/10"
        >
          Logout
        </button>
      </div>
    </div>
  );
}