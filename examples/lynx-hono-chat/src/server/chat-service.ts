import { createOpenAI } from "@ai-sdk/openai";
import { generateText, stepCountIs } from "ai";
import type { ModelMessage } from "ai";
import type { ChatMessagePayload as ChatMessage, ChatReplyPayload as ChatReply } from "../shared/types/chat.js";
import { buildMockResponse } from "./mock/index.js";
import { weatherTool } from "./tools/index.js";

const provider = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
});

const modelName = process.env.OPENAI_MODEL || "gpt-4o-mini";
const useCompatibleChatApi = Boolean(process.env.OPENAI_BASE_URL);

const logChatService = (event: string, payload?: unknown) => {
  if (payload === undefined) {
    console.info(`[chat-service] ${event}`);
    return;
  }

  console.info(`[chat-service] ${event}`, payload);
};

const toModelMessages = (messages: ChatMessage[]): ModelMessage[] =>
  messages.map((message) => ({
    role: message.role,
    content: message.content,
  }));

export const replyToChat = async (
  messages: ChatMessage[],
): Promise<ChatReply> => {
  const lastUserMessage = [...messages]
    .reverse()
    .find((message) => message.role === "user");

  logChatService("reply.start", {
    mode: process.env.OPENAI_API_KEY ? "openai" : "mock",
    model: modelName,
    messageCount: messages.length,
    lastUserMessage: lastUserMessage?.content ?? null,
  });

  if (!process.env.OPENAI_API_KEY) {
    return buildMockResponse(messages);
  }

  try {
    const result = await generateText({
      model: useCompatibleChatApi
        ? provider.chat(modelName)
        : provider(modelName),
      stopWhen: stepCountIs(3),
      system: [
        "You are a concise assistant for a ReactLynx chat demo.",
        "Keep answers compact and practical.",
        "Use the weather tool if the user asks about weather or temperature.",
      ].join(" "),
      messages: toModelMessages(messages),
      tools: {
        get_weather: weatherTool,
      },
    });

    const resultWithSteps = result as typeof result & {
      steps?: Array<{
        toolCalls?: unknown[];
        toolResults?: unknown[];
        text?: string;
      }>;
    };

    logChatService("reply.openai.result", {
      textLength: result.text.length,
      finishReason: result.finishReason,
      steps: resultWithSteps.steps?.map((step, index) => ({
        index,
        textLength: step.text?.length ?? 0,
        toolCallCount: step.toolCalls?.length ?? 0,
        toolResultCount: step.toolResults?.length ?? 0,
      })) ?? [],
    });

    return {
      message: {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: result.text,
      },
      meta: {
        mode: "openai",
        model: result.response.modelId ?? modelName,
      },
    };
  } catch (error) {
    const traceId = globalThis.crypto.randomUUID().slice(0, 8);

    console.error(`[chat-service] LLM request failed (trace=${traceId}):`, error);

    return {
      message: {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: `Upstream error (trace=${traceId})`,
      },
      meta: {
        mode: "mock",
        model: "mock-server",
        error: `trace=${traceId}`,
      },
    };
  }
};
