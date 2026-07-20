import { createOpenUiLibrary, OpenUiRenderer } from "@lynx-js/genui/openui";
import type { ActionEvent } from "@lynx-js/genui/openui";
import { useCallback, useEffect, useMemo, useState } from "@lynx-js/react";

import { TRAVEL_PLAN_RESPONSE } from "./demoResponse.js";

import "./App.css";

const STREAM_CHUNK_SIZE = 28;
const STREAM_DELAY_MS = 45;

type StreamStatus = "streaming" | "done";

export function App() {
  const library = useMemo(() => createOpenUiLibrary(), []);
  const [response, setResponse] = useState("");
  const [sessionId, setSessionId] = useState(0);
  const [status, setStatus] = useState<StreamStatus>("streaming");
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    let offset = 0;

    setResponse("");
    setStatus("streaming");
    setActionMessage(null);

    const tick = () => {
      if (cancelled) {
        return;
      }

      const nextOffset = Math.min(
        offset + STREAM_CHUNK_SIZE,
        TRAVEL_PLAN_RESPONSE.length,
      );
      setResponse(TRAVEL_PLAN_RESPONSE.slice(0, nextOffset));
      offset = nextOffset;

      if (offset >= TRAVEL_PLAN_RESPONSE.length) {
        setStatus("done");
        return;
      }

      setTimeout(tick, STREAM_DELAY_MS);
    };

    tick();

    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  const replay = useCallback(() => {
    "background only";
    setSessionId((value) => value + 1);
  }, []);

  const handleAction = useCallback((event: ActionEvent) => {
    "background only";
    setActionMessage(event.humanFriendlyMessage);
  }, []);

  const progress = Math.round(
    (response.length / TRAVEL_PLAN_RESPONSE.length) * 100,
  );

  return (
    <page>
      <view className="page">
        <view className="topbar">
          <view className="status">
            <view className={`status-dot status-dot--${status}`} />
            <text className="status-text">
              {status === "done" ? "OpenUI ready" : `Streaming ${progress}%`}
            </text>
          </view>
          <view className="replay-button" bindtap={replay}>
            <text className="replay-icon">↻</text>
            <text className="replay-label">Replay</text>
          </view>
        </view>

        <scroll-view scroll-orientation="vertical" className="scroll">
          <view className="renderer-shell">
            <OpenUiRenderer
              key={sessionId}
              response={response}
              library={library}
              isStreaming={status === "streaming"}
              onAction={handleAction}
            />
          </view>
        </scroll-view>

        {actionMessage && (
          <view className="action-toast">
            <text className="action-toast-label">Action sent</text>
            <text className="action-toast-text">{actionMessage}</text>
          </view>
        )}
      </view>
    </page>
  );
}
