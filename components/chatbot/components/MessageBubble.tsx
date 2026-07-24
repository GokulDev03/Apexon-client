"use client";

import { Message } from "../types/Chat";
import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 break-all"
              >
                {children}
              </a>
            ),
          }}
        >
          {message.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}