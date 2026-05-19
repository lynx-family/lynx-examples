import { useEffect, useRef, useState } from "@lynx-js/react";
import type { ChatMessage } from "../types/chat";

export function ChatBubble({ message }: { message: ChatMessage }) {
  const bubbleClassName = message.role === "user"
    ? "Bubble Bubble--user"
    : message.pending
    ? "Bubble Bubble--assistant Bubble--thinking"
    : "Bubble Bubble--assistant";
  const shouldTypewrite = message.role === "assistant" && !message.pending && message.animate;
  const [visibleContent, setVisibleContent] = useState(
    shouldTypewrite ? "" : message.content,
  );
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (!shouldTypewrite) {
      setVisibleContent(message.content);
      return;
    }

    const characters = Array.from(message.content);
    let index = 0;

    setVisibleContent("");

    const tick = () => {
      index = Math.min(index + 2, characters.length);
      setVisibleContent(characters.slice(0, index).join(""));

      if (index < characters.length) {
        timeoutRef.current = setTimeout(tick, 24);
      }
    };

    timeoutRef.current = setTimeout(tick, 24);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [message.content, shouldTypewrite]);

  return (
    <view className={bubbleClassName}>
      <text className="BubbleRole">
        {message.role === "user" ? "You" : "Assistant"}
      </text>
      {message.pending
        ? (
          <view className="ThinkingRow">
            <text className="BubbleText BubbleText--thinkingLabel">Thinking</text>
            <view className="ThinkingDots">
              <view className="ThinkingDot ThinkingDot--1" />
              <view className="ThinkingDot ThinkingDot--2" />
              <view className="ThinkingDot ThinkingDot--3" />
            </view>
          </view>
        )
        : (
          <text className="BubbleText">
            {visibleContent}
            {shouldTypewrite && visibleContent.length < message.content.length
              ? <text className="TypingCaret">|</text>
              : null}
          </text>
        )}
    </view>
  );
}
