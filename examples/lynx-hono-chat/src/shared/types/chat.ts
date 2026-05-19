export type ChatRole = "assistant" | "system" | "user";

export type ChatMessagePayload = {
  id: string;
  role: ChatRole;
  content: string;
};

export type ChatMeta = {
  mode: "mock" | "openai";
  model: string;
  error?: string;
};

export type ChatReplyPayload = {
  message: ChatMessagePayload;
  meta: ChatMeta;
};
