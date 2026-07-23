"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

interface ChatButtonProps {
  onClick: () => void;
}

export default function ChatButton({ onClick }: ChatButtonProps) {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3">
      {showTooltip && (
        <div className="relative flex items-center rounded-2xl bg-white px-4 py-3 shadow-xl">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs text-gray-700 hover:bg-gray-400"
          >
            ✕
          </button>
          <p className="text-sm font-medium text-gray-800">
  Hi! Need any help? 👋
</p>
          {/* Speech bubble tail */}
          <div className="absolute top-1/2 -right-2 h-4 w-4 -translate-y-1/2 rotate-45 bg-white" />
        </div>
      )}

     <button
  onClick={() => {
    setShowTooltip(false);
    onClick();
  }}
  className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 text-accent-500 shadow-xl transition hover:scale-105 hover:bg-brand-600"
>
  <MessageCircle size={28} />
</button>
    </div>
  );
}