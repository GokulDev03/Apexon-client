"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { MAIN_NAV } from "@/constants/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "./Container";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useNav } from "@/context/NavContext";
import { navConfig } from "@/config/nav.config";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Desktop: sticky navbar with hover-triggered mega menus.
 * Mobile: hamburger opens a full-screen accordion overlay (see MobileMenu below),
 * plus a persistent bottom CTA bar (see FooterCTA-style sticky bar in layouts).
 */
export function Navbar() {
  const scrolled = useScrollPosition(navConfig.stickyScrollThreshold);
  const { isMobileMenuOpen, setMobileMenuOpen, activeMegaMenu, setActiveMegaMenu } = useNav();

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled ? "glass-panel shadow-soft" : "bg-transparent"
      )}
    >
      <Container className="flex h-18 items-center justify-between">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight text-ink-900">
          <img src="/apexon-logo-v2.svg"  alt="Apexon" 
  width={180} 
  height={100}
  className="h-10 w-auto" 
   />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setActiveMegaMenu(null)}>
          {MAIN_NAV.map((item) => (
            <div key={item.label} className="relative" onMouseEnter={() => item.megaMenu && setActiveMegaMenu(item.label)}>
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-100 hover:text-ink-900"
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
                    className="absolute left-1/2 top-full mt-2 w-[640px] -translate-x-1/2 rounded-lg border border-ink-200 bg-white p-6 shadow-raised"
                  >
                    <div className={cn("grid gap-8", item.megaMenu.featured ? "grid-cols-4" : "grid-cols-3")}>
                      {item.megaMenu.columns.map((column) => (
                        <div key={column.title}>
                          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-400">
                            {column.title}
                          </p>
                          <ul className="flex flex-col gap-2">
                            {column.links.map((link) => (
                              <li key={link.href}>
                                <Link href={link.href} className="text-sm text-ink-700 hover:text-brand-600">
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {item.megaMenu.featured && (
                        <Link href={item.megaMenu.featured.href} className="group">
                          <div className="aspect-video w-full rounded-sm bg-gradient-to-br from-brand-100 to-accent-100" />
                          <p className="mt-3 text-sm font-medium text-ink-900 group-hover:text-brand-600">
                            {item.megaMenu.featured.title}
                          </p>
                          <p className="text-xs text-ink-500">{item.megaMenu.featured.description}</p>
                        </Link>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/book-consultation" size="sm">
            Book a Consultation
          </Button>
        </div>

        <button
          aria-label="Toggle navigation menu"
          className="p-2 lg:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
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
          className="overflow-hidden border-t border-ink-200 bg-white lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-sm px-3 py-3 text-base font-medium text-ink-800 hover:bg-ink-100"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-sm px-3 py-3 text-base font-medium text-ink-800 hover:bg-ink-100"
            >
              Contact
            </Link>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
