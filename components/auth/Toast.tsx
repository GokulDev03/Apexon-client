"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function Toast({
  message,
  show,
  onClose,
}: {
  message: string;
  show: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000); // auto-hide after 3s
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10000,
        background: "#0d3320",
        color: "#f5ead9",
        padding: "12px 20px",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontSize: "14px",
        fontWeight: 600,
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        animation: "toastIn 0.35s ease-out",
      }}
    >
      <CheckCircle2 size={18} color="#d4a574" />
      {message}

      <style jsx global>{`
        @keyframes toastIn {
          from {
            opacity: 0;
            transform: translate(-50%, 12px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
      `}</style>
    </div>
  );
}