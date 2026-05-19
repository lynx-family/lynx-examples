import type { ChatMessage, ChatResponse } from "../types/chat";

export const fetchChatReply = async (
  messages: ChatMessage[],
): Promise<ChatResponse> => {
  const response = await fetch(new URL("/api/chat", __CHAT_SERVER_URL__), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ messages }),
  });

  if (!response.ok) {
    throw new Error(`Chat request failed with status ${response.status}.`);
  }

  return (await response.json()) as ChatResponse;
};
