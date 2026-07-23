"use client";

import { MessageSquare, Calendar, Rocket, LifeBuoy } from "lucide-react";

interface QuickActionProps {
  onSelect: (value: string) => void;
}

const QUICK_ACTIONS = [
  { icon: MessageSquare, label: "Chat with Sales", value: "I want to talk to sales about a project" },
  { icon: Calendar, label: "Book a Demo", value: "I'd like to book a consultation" },
  { icon: Rocket, label: "Get Started", value: "How do I get started with Apexon?" },
  { icon: LifeBuoy, label: "Get Help", value: "I need help with my existing project" },
];

export default function QuickAction({ onSelect }: QuickActionProps) {
  return (
    <div className="flex flex-col gap-2 px-4 pb-3">
      <p className="text-xs font-medium text-[#0d3320]/60">
        What would you like to do next?
      </p>
      <div className="flex flex-wrap gap-2">
        {QUICK_ACTIONS.map((action) => (
          <button
            key={action.label}
            onClick={() => onSelect(action.value)}
            className="flex items-center gap-1.5 rounded-full border border-[#0d3320]/20 bg-white px-3 py-2 text-xs font-medium text-[#0d3320] transition hover:border-[#d4a574] hover:bg-[#0d3320]/5"
          >
            <action.icon size={14} className="text-[#d4a574]" />
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}