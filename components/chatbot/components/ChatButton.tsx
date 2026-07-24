"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

interface ChatButtonProps {
  onClick: () => void;
  onSuggestionClick: (message: string) => void;
}

interface Suggestion {
  display: string;
  message: string;
}

const SUGGESTIONS: Suggestion[] = [
  { display: "Need a website built? 👋", message: "I need a website built for my business" },
  { display: "Looking for SEO help? 🚀", message: "I need SEO help for my website" },
  { display: "Want a web app? 💻", message: "I want to build a web application" },
  { display: "Need UI/UX design? 🎨", message: "I need UI/UX design help" },
  { display: "Planning an e-commerce store? 🛒", message: "I'm planning an e-commerce store" },
  { display: "Need API integration? 🔗", message: "I need API integration help" },
  { display: "Website running slow? Let's fix it ⚡", message: "My website is running slow, can you help fix it?" },
];

const DEFAULT_SUGGESTION: Suggestion = {
  display: "Need any help? 👋",
  message: "I need help with my website",
};

export default function ChatButton({ onClick, onSuggestionClick }: ChatButtonProps) {
  const [showTooltip, setShowTooltip] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SUGGESTIONS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current: Suggestion = SUGGESTIONS[index] ?? DEFAULT_SUGGESTION;



  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3">
      {showTooltip && (
        <div className="relative flex items-center rounded-2xl bg-white px-4 py-3 shadow-xl">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs text-gray-700 hover:bg-gray-400"
          >
            <X size={12} />
          </button>

          <button
            onClick={() => {
              setShowTooltip(false);
              onSuggestionClick(current.message);
            }}
            key={index}
            className="animate-fade-in text-sm font-medium text-[#0d3320] whitespace-nowrap hover:text-[#0d3320]/70 transition"
          >
            {current.display}
          </button>

          <div className="absolute top-1/2 -right-2 h-4 w-4 -translate-y-1/2 rotate-45 bg-white" />
        </div>
      )}

      <button
        onClick={() => {
          setShowTooltip(false);
          onClick();
        }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0d3320] text-[#d4a574] shadow-xl transition hover:scale-105 hover:bg-[#0a2919]"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
}