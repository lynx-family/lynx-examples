import type { ChatMessagePayload, ChatReplyPayload, ChatRole } from "../../shared/types/chat";

export type { ChatRole };

export type ChatMessage = ChatMessagePayload & {
  pending?: boolean;
  animate?: boolean;
};

export type ChatResponse = ChatReplyPayload;
