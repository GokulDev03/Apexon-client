"use client";

import ChatButton from "./components/ChatButton";
import ChatWindow from "./components/ChatWindow";
import { useChat } from "./hooks/useChat";

export default function ChatBot() {
  const chat = useChat();

  return (
    <>
      {!chat.isOpen && (
        <ChatButton onClick={chat.openChat} />
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