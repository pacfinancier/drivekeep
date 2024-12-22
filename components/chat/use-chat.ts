"use client";

import { useState, useCallback } from "react";
import { ChatMessage } from "./types";

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    role: "assistant",
    content: "Hi! I'm here to help you get started with Keep. What questions do you have about our vehicle program?"
  }
];

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (content: string) => {
    setIsLoading(true);
    
    // Add user message
    setMessages(prev => [...prev, { role: "user", content }]);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Add mock response
    setMessages(prev => [...prev, {
      role: "assistant",
      content: "Thanks for your message! This is a demo response. In production, this would connect to a real chat API."
    }]);

    setIsLoading(false);
  }, []);

  return {
    messages,
    sendMessage,
    isLoading
  };
}