"use client";

import { useEffect } from "react";
import ChatButton from "./components/ChatButton";
import ChatWindow from "./components/ChatWindow";
import { useChat } from "./hooks/useChat";
import { qualifyLead } from "@/components/lead-qualification/services/leadQualificationService";

export default function ChatBot() {
  const chat = useChat();

  useEffect(() => {
    if (chat.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [chat.isOpen]);

  const handleCloseChat = async () => {
    // Only qualify if there was an actual conversation (avoid empty chats)
    if (chat.messages && chat.messages.length >= 2) {
      try {
        // Step 1: Extract lead info from conversation
        const extractRes = await fetch("/api/leads/extract", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ conversation: chat.messages }),
        });
        const extractedData = await extractRes.json();

        // Step 2: Only qualify if we got at least an email
        if (extractedData?.email) {
          await qualifyLead(extractedData);
        }
      } catch (err) {
        console.error("Lead qualification failed:", err);
        // Fail silently - don't block user from closing chat
      }
    }

    chat.closeChat();
  };

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
          onClose={handleCloseChat}
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