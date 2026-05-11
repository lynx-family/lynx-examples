import type { ChatMessage, ChatRole } from "../types/chat";

let messageCounter = 0;

export const createChatMessage = (
  role: ChatRole,
  content: string,
): ChatMessage => {
  messageCounter += 1;
  return {
    id: `${role}-${Date.now()}-${messageCounter}`,
    role,
    content,
  };
};

export const initialMessages: ChatMessage[] = [
  createChatMessage(
    "assistant",
    "This ReactLynx chat UI talks to a Hono server.",
  ),
];

export const quickPrompts = [
  "How ReactLynx works with Hono server?",
  "What is the weather in Shanghai today?",
];
