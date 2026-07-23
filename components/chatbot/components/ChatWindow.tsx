"use client";

import TypingIndicator from "./TypingIndicator";
import { Message } from "../types/Chat";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import QuickAction from "./QuickAction";

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
  handleQuickAction
}: ChatWindowProps) {
  return (
    <div className="fixed bottom-24 right-6 z-[9999] flex h-[650px] w-[380px] flex-col rounded-2xl border border-[#0d3320]/20 bg-[#f5ead9] shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#0d3320] p-4 text-white">
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
          className="text-lg text-white/80 hover:text-white transition"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <MessageList messages={messages} />
      {isTyping && <TypingIndicator />}

      {/* Chat Input */}
      <ChatInput value={input} onChange={onInputChange} onSend={onSend} />

      {messages.length === 1 && !isTyping && (
  <QuickAction onSelect={handleQuickAction} />
)}
    </div>
  );
}