"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface NavContextValue {
  isMobileMenuOpen: boolean;
  activeMegaMenu: string | null;
  setMobileMenuOpen: (open: boolean) => void;
  setActiveMegaMenu: (label: string | null) => void;
}

const NavContext = createContext<NavContextValue | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  return (
    <NavContext.Provider
      value={{ isMobileMenuOpen, activeMegaMenu, setMobileMenuOpen, setActiveMegaMenu }}
    >
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used within NavProvider");
  return ctx;
}
