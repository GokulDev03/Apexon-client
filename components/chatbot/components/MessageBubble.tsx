"use client";

import { Message } from "../types/Chat";
import clsx from "clsx";

interface Props {
  message: Message;
}

export default function MessageBubble({ message }: Props) {
  return (
    <div
      className={clsx(
        "mb-3 flex",
        message.role === "user" ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={clsx(
          "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
          message.role === "user"
            ? "bg-[#0d3320] text-[#f5ead9]"
            : "bg-white text-[#0d3320] border border-[#0d3320]/10"
        )}
      >
        {message.content}
      </div>
    </div>
  );
}