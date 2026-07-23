"use client";

import { Message } from "../types/Chat";
import MessageBubble from "./MessageBubble";

interface Props {
  messages: Message[];
}

export default function MessageList({ messages }: Props) {
  return (
    <div className="flex-1 overflow-y-auto bg-[#f5ead9] p-4">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </div>
  );
}