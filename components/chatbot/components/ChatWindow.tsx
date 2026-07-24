"use client";

import TypingIndicator from "./TypingIndicator";
import { Message } from "../types/Chat";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import QuickAction from "./QuickAction";
import { X } from "lucide-react";

interface ChatWindowProps {
  onClose: () => void;
  messages: Message[];
  input: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
  isTyping: boolean;
  handleQuickAction: (value: string) => void;
}

export default function ChatWindow({
  onClose,
  messages,
  input,
  onInputChange,
  onSend,
  isTyping,
  handleQuickAction,
}: ChatWindowProps) {
  return (
    <div
      className="
        fixed z-[9999] flex flex-col overflow-hidden bg-[#f5ead9] shadow-2xl
        inset-0 h-full w-full rounded-none border-0
        sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[650px] sm:w-[380px]
        sm:rounded-2xl sm:border sm:border-[#0d3320]/20
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between bg-[#0d3320] p-4 text-white safe-top">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d4a574]/20">
            <span className="text-lg">💬</span>
          </div>
          <div>
            <h2 className="font-semibold leading-tight">Apexon AI</h2>
            <p className="text-xs text-[#d4a574]">Online now</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="text-white/80 hover:text-white transition"
        >
          <X size={22} />
        </button>
      </div>

      {/* Messages */}
      <MessageList messages={messages} />
      {isTyping && <TypingIndicator />}

      {messages.length === 1 && !isTyping && (
        <QuickAction onSelect={handleQuickAction} />
      )}

      {/* Chat Input */}
      <ChatInput value={input} onChange={onInputChange} onSend={onSend} />
    </div>
  );
}