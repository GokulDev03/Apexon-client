"use client";

import { useState } from "react";
import { Message } from "../types/Chat";
import { sendMessageToAI } from "../services/Chat.service";

export function useChat() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "Hi 👋 I'm Apexon AI. I can help you with Website Development, Web Applications, SEO, UI/UX, API Integration and more.",
      createdAt: new Date(),
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const openChat = () => setIsOpen(true);

  const closeChat = () => setIsOpen(false);

  const toggleChat = () => setIsOpen((prev) => !prev);

  const handleInputChange = (value: string) => {
    setInput(value);
  };

 const sendMessage = async (overrideMessage?: string) => {
  const currentMessage = overrideMessage ?? input;
  if (!currentMessage.trim()) return;

  const userMessage: Message = {
    id: crypto.randomUUID(),
    role: "user",
    content: currentMessage,
    createdAt: new Date(),
  };

  setMessages((prev) => [...prev, userMessage]);
  setInput("");
  setIsTyping(true);

  const botMessageId = crypto.randomUUID();
  setMessages((prev) => [
    ...prev,
    { id: botMessageId, role: "assistant", content: "", createdAt: new Date() },
  ]);

  try {
    await sendMessageToAI(currentMessage, (partialText) => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId ? { ...msg, content: partialText } : msg
        )
      );
    });
  } catch (error) {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === botMessageId
          ? { ...msg, content: "Something went wrong. Please try again." }
          : msg
      )
    );
  }

  setIsTyping(false);
};


  const handleQuickAction = (value: string) => {
  setInput(value);
  
  setTimeout(() => {
    sendMessage();
  }, 50);
};

  return {
    isOpen,
    messages,
    input,
    isTyping,

    openChat,
    closeChat,
    toggleChat,

    handleInputChange,
    sendMessage,
    handleQuickAction,
  };
}