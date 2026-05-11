import type { ChatMessagePayload as ChatMessage, ChatReplyPayload as ChatReply } from "../../shared/types/chat.js";
import { extractCityFromPrompt, formatWeatherReply, lookupWeather } from "../tools/index.js";

const logMockService = (event: string, payload?: unknown) => {
  if (payload === undefined) {
    console.info(`[mock-service] ${event}`);
    return;
  }

  console.info(`[mock-service] ${event}`, payload);
};

export const buildMockResponse = async (
  messages: ChatMessage[],
): Promise<ChatReply> => {
  const lastUserMessage = [...messages]
    .reverse()
    .find((message) => message.role === "user");
  const prompt = lastUserMessage?.content.toLowerCase() ?? "";

  logMockService("reply.start", {
    lastUserMessage: lastUserMessage?.content ?? null,
  });

  let content = "This is a mock response from the Hono chat server.";

  if (
    prompt.includes("weather")
    || prompt.includes("temperature")
    || prompt.includes("天气")
  ) {
    const city = extractCityFromPrompt(lastUserMessage?.content ?? "");

    logMockService("reply.weather.detected", {
      prompt: lastUserMessage?.content ?? "",
      extractedCity: city,
    });

    if (!city) {
      content = "Please include a city name, for example: weather in Shanghai.";
    } else {
      try {
        const weather = await lookupWeather(city);

        logMockService("reply.weather.success", {
          city,
          resolvedCity: weather.city,
        });

        return {
          message: {
            id: `assistant-${Date.now()}`,
            role: "assistant",
            content: formatWeatherReply(weather),
          },
          meta: {
            mode: "mock",
            model: "mock-server",
          },
        };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Weather lookup failed.";

        console.error("[mock-service] reply.weather.error", {
          city,
          error: errorMessage,
        });

        return {
          message: {
            id: `assistant-${Date.now()}`,
            role: "assistant",
            content: `Weather lookup failed: ${errorMessage}`,
          },
          meta: {
            mode: "mock",
            model: "mock-server",
            error: errorMessage,
          },
        };
      }
    }
  } else if (prompt.includes("hono")) {
    content =
      "Mock mode: Hono is a good fit here because the server stays tiny, typed, and easy to move between local Node and edge-style runtimes.";
  }

  return {
    message: {
      id: `assistant-${Date.now()}`,
      role: "assistant",
      content,
    },
    meta: {
      mode: "mock",
      model: "mock-server",
    },
  };
};
