import {
  A2UI,
  Button,
  Card,
  CheckBox,
  ChoicePicker,
  Column,
  createMessageStore,
  DateTimeInput,
  Divider,
  Icon,
  Image,
  LineChart,
  List,
  Modal,
  PieChart,
  RadioGroup,
  Row,
  Slider,
  Tabs,
  Text,
  TextField,
} from "@lynx-js/genui/a2ui";
import type { CatalogInput, MessageStore } from "@lynx-js/genui/a2ui";
import { useCallback, useEffect, useMemo, useRef, useState } from "@lynx-js/react";

import { actionMessages, initialMessages } from "./demoMessages.js";
import { createMockAgent } from "./mockAgent.js";
import type { MockAgent, MockAgentProgress } from "./mockAgent.js";

import "./App.css";

const STREAM_DELAY_MS = 760;

const CATALOGS: readonly CatalogInput[] = [
  Text as CatalogInput,
  Column as CatalogInput,
  Row as CatalogInput,
  List as CatalogInput,
  Card as CatalogInput,
  Button as CatalogInput,
  Divider as CatalogInput,
  Image as CatalogInput,
  LineChart as CatalogInput,
  CheckBox as CatalogInput,
  ChoicePicker as CatalogInput,
  DateTimeInput as CatalogInput,
  Icon as CatalogInput,
  Modal as CatalogInput,
  PieChart as CatalogInput,
  RadioGroup as CatalogInput,
  Slider as CatalogInput,
  Tabs as CatalogInput,
  TextField as CatalogInput,
];

function createSession(
  onProgress: (progress: MockAgentProgress) => void,
): {
  store: MessageStore;
  agent: MockAgent;
} {
  const store = createMessageStore();
  const agent = createMockAgent(store, {
    initialMessages,
    actionMocks: actionMessages,
    delayMs: STREAM_DELAY_MS,
    onProgress,
  });

  return { store, agent };
}

export function App() {
  const agentRef = useRef<MockAgent | null>(null);
  const [sessionId, setSessionId] = useState(0);
  const [progress, setProgress] = useState<MockAgentProgress>({
    deliveredCount: 0,
    totalCount: initialMessages.length,
    status: "idle",
  });

  const session = useMemo(() => {
    "background only";
    return createSession(setProgress);
  }, [sessionId]);

  useEffect(() => {
    agentRef.current?.stop();
    agentRef.current = session.agent;
    void session.agent.start();

    return () => {
      session.agent.stop();
      if (agentRef.current === session.agent) {
        agentRef.current = null;
      }
    };
  }, [session]);

  const replay = useCallback(() => {
    "background only";
    setSessionId((value) => value + 1);
  }, []);

  const statusText = progress.status === "done"
    ? "stream complete"
    : `streaming ${Math.min(progress.deliveredCount, progress.totalCount)}/${progress.totalCount}`;

  return (
    <page>
      <view className="page">
        <view className="topbar">
          <view className="title-block">
            <text className="eyebrow">A2UI example</text>
            <text className="title">Streaming generated UI</text>
          </view>
          <view className="replay-button" bindtap={replay}>
            <text className="replay-icon">↻</text>
            <text className="replay-label">Replay</text>
          </view>
        </view>

        <view className="status-row">
          <view className={`status-dot status-dot--${progress.status}`} />
          <text className="status-text">{statusText}</text>
        </view>

        {session?.store && (
          <scroll-view scroll-orientation="vertical" className="scroll">
            <A2UI
              key={sessionId}
              messageStore={session.store}
              catalogs={CATALOGS}
              onAction={(action) => {
                void agentRef.current?.onAction(action);
              }}
              wrapSurface={(children) => <view className="a2ui-surface">{children}</view>}
              renderEmpty={() => (
                <view className="empty-state">
                  <text className="empty-title">Waiting for the first batch</text>
                </view>
              )}
              renderFallback={() => (
                <view className="empty-state">
                  <text className="empty-title">Rendering...</text>
                </view>
              )}
              className="a2ui-container"
            />
          </scroll-view>
        )}
      </view>
    </page>
  );
}
