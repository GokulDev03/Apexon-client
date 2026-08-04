"use client";

import { useRef, useEffect } from "react";
import { SendHorizonal } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export default function ChatInput({ value, onChange, onSend }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea as user types
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    }
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) {
        onSend();
      }
    }
    // Shift+Enter -> default behavior happens (new line), no need to handle
  };

  return (
    <div className="border-t border-[#0d3320]/10 bg-[#f5ead9] p-4">
      <div className="flex items-end gap-2">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything..."
          rows={1}
          className="flex-1 resize-none rounded-xl border border-[#0d3320]/20 bg-white px-4 py-3 text-sm text-[#0d3320] outline-none focus:border-[#d4a574] transition max-h-[120px] overflow-y-auto"
        />

        <button
          onClick={() => onSend()}
          className="rounded-xl bg-[#0d3320] p-3 text-[#d4a574] hover:bg-[#0d3320]/90 transition"
        >
          <SendHorizonal size={18} />
        </button>
      </div>
    </div>
  );
}