"use client";

import type { ReactNode } from "react";
import { ModalProvider } from "@/context/ModalContext";
import { NavProvider } from "@/context/NavContext";

/** Single composition root for all client-side providers/contexts. */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <NavProvider>
      <ModalProvider>{children}</ModalProvider>
    </NavProvider>
  );
}
