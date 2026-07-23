"use client";

import { SendHorizonal } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export default function ChatInput({ value, onChange, onSend }: ChatInputProps) {
  return (
    <div className="border-t border-[#0d3320]/10 bg-[#f5ead9] p-4">
      <div className="flex items-center gap-2">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSend();
          }}
          placeholder="Ask anything..."
          className="flex-1 rounded-xl border border-[#0d3320]/20 bg-white px-4 py-3 text-sm text-[#0d3320] outline-none focus:border-[#d4a574] transition"
        />

        <button
          onClick={onSend}
          className="rounded-xl bg-[#0d3320] p-3 text-[#d4a574] hover:bg-[#0d3320]/90 transition"
        >
          <SendHorizonal size={18} />
        </button>
      </div>
    </div>
  );
}