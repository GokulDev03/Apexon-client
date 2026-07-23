"use client";

export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 bg-[#f5ead9] px-4 pb-2 text-sm text-[#0d3320]/60">
      <span className="flex gap-1">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#0d3320]/50 [animation-delay:0ms]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#0d3320]/50 [animation-delay:150ms]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#0d3320]/50 [animation-delay:300ms]" />
      </span>
      <span className="ml-1">Apexon AI is typing...</span>
    </div>
  );
}