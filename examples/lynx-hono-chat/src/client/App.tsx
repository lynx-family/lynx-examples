import { List } from "@lynx-js/lynx-ui";
import type { ListRef } from "@lynx-js/lynx-ui";
import { useCallback, useEffect, useRef, useState } from "@lynx-js/react";
import reactLogo from "./assets/react-logo.png";
import { fetchChatReply } from "./chat/chat-api";
import { createChatMessage, initialMessages, quickPrompts } from "./chat/chat-state";
import { ChatBubble } from "./components/ChatBubble";
import { ComposerCard } from "./components/ComposerCard";
import { QuickPromptBar } from "./components/QuickPromptBar";
import type { ChatMessage } from "./types/chat";

import "./App.css";

const THINKING_MESSAGE_ID = "assistant-thinking";

export function App() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [draft, setDraft] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [statusText, setStatusText] = useState("Connected");
  const messageListRef = useRef<ListRef | null>(null);

  const canSend = draft.trim().length > 0 && !isSending;

  const scrollToBottom = useCallback((smooth = true) => {
    "background only";
    const lastIndex = messages.length - 1;
    if (lastIndex < 0) return;
    messageListRef.current?.scrollTo(smooth, "bottom", lastIndex, 0);
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToBottom(true);
    }, 16);

    return () => {
      clearTimeout(timer);
    };
  }, [messages, scrollToBottom]);

  const submitMessage = useCallback(async (rawText?: string) => {
    "background only";
    const content = (rawText ?? draft).trim();
    if (!content || isSending) return;

    const userMessage = createChatMessage("user", content);
    const thinkingMessage: ChatMessage = {
      id: THINKING_MESSAGE_ID,
      role: "assistant",
      content: "",
      pending: true,
    };
    const nextMessages = [...messages, userMessage];

    setMessages([...nextMessages, thinkingMessage]);
    setDraft("");
    setIsSending(true);
    setStatusText("Waiting for assistant...");

    try {
      const response = await fetchChatReply(nextMessages);
      setMessages(prev => [
        ...prev.filter(message => message.id !== THINKING_MESSAGE_ID),
        {
          ...response.message,
          animate: true,
        },
      ]);
      setStatusText(`${response.meta.mode} mode · ${response.meta.model}`);
    } catch (error) {
      const fallbackText = error instanceof Error
        ? error.message
        : "Unable to reach the chat server.";

      setMessages(prev => [
        ...prev.filter(message => message.id !== THINKING_MESSAGE_ID),
        createChatMessage(
          "assistant",
          `The request failed. ${fallbackText}`,
        ),
      ]);
      setStatusText("Server unavailable");
    } finally {
      setIsSending(false);
    }
  }, [draft, isSending, messages]);

  const handlePrompt = useCallback((prompt: string) => {
    "background only";
    submitMessage(prompt);
  }, [submitMessage]);

  return (
    <view className="Screen">
      <view className="Glow Glow--orange" />
      <view className="Glow Glow--blue" />

      <view className="Shell">
        <view className="Topbar">
          <view className="TopbarLead">
            <view className="LogoRow">
              <image src="https://hono.dev/images/logo.png" className="LogoBadge LogoBadge--hono" />
              <image src={reactLogo} className="LogoBadge LogoBadge--react" />
            </view>
            <text className="Title">Chat Workspace</text>
          </view>
          <view className="Badge">
            <text className="BadgeText">{statusText}</text>
          </view>
        </view>

        <QuickPromptBar prompts={quickPrompts} onSelect={handlePrompt} />

        <view className="Panel">
          <List
            className="MessageViewport"
            ref={messageListRef}
            listId="message-viewport"
            listType="single"
            spanCount={1}
            scrollOrientation="vertical"
            enableScroll={true}
            useRefactorList={true}
            mainAxisGap={14}
            onLayoutComplete={() => {
              "background only";
              scrollToBottom(false);
            }}
          >
            {messages.map((message, index) => (
              <list-item
                key={message.id}
                item-key={message.id}
                id={`message-item-${index}`}
              >
                <ChatBubble message={message} />
              </list-item>
            ))}
          </List>

          <ComposerCard
            value={draft}
            onChange={setDraft}
            onSubmit={submitMessage}
            disabled={!canSend}
            busy={isSending}
          />
        </view>
      </view>
    </view>
  );
}
