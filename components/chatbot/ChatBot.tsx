"use client";

import { useEffect } from "react";
import ChatButton from "./components/ChatButton";
import ChatWindow from "./components/ChatWindow";
import { useChat } from "./hooks/useChat";

export default function ChatBot() {
  const chat = useChat();
  useEffect(() => {
  if (chat.isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}, [chat.isOpen]);

  return (
    <>
      {!chat.isOpen && (
        <ChatButton 
          onClick={chat.openChat} 
          onSuggestionClick={chat.handleQuickAction} 
        />
      )}

      {chat.isOpen && (
        <ChatWindow
          onClose={chat.closeChat}
          messages={chat.messages}
          input={chat.input}
          onInputChange={chat.handleInputChange}
          onSend={chat.sendMessage}
          isTyping={chat.isTyping}
          handleQuickAction={chat.handleQuickAction}
        />
      )}
    </>
  );
}