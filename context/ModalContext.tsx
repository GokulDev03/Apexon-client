"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface ModalContextValue {
  activeModal: string | null;
  openModal: (id: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const value: ModalContextValue = {
    activeModal,
    openModal: (id) => setActiveModal(id),
    closeModal: () => setActiveModal(null),
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
