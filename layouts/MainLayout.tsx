import type { ReactNode } from "react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { MobileStickyBar } from "./MobileStickyBar";

/** Global shell applied once in app/layout.tsx — navbar, page content, footer, mobile sticky CTA bar. */
export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pb-16 lg:pb-0">{children}</main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
