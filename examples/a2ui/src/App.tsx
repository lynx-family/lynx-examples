import { A2UI, Button, Card, Column, createMessageStore, defineCatalog, Image, Row, Text } from "@lynx-js/genui/a2ui";
import type { CatalogComponent, CatalogManifest, MessageStore } from "@lynx-js/genui/a2ui";
import { catalogManifests } from "@lynx-js/genui/a2ui/catalog";
import { useCallback, useEffect, useMemo, useRef, useState } from "@lynx-js/react";

import generatedLoadingManifest from "./catalog/Loading/catalog.json";
import { Loading } from "./catalog/Loading/Loading.js";
import { actionMessages, initialMessages } from "./demoMessages.js";
import { createMockAgent } from "./mockAgent.js";
import type { MockAgent, MockAgentProgress } from "./mockAgent.js";

import "./App.css";

const STREAM_DELAY_MS = 760;
const loadingManifest = generatedLoadingManifest satisfies CatalogManifest;

const ALL_BUILTINS = defineCatalog([
  [Text as CatalogComponent, catalogManifests.Text],
  [Image as CatalogComponent, catalogManifests.Image],
  [Row as CatalogComponent, catalogManifests.Row],
  [Column as CatalogComponent, catalogManifests.Column],
  [Card as CatalogComponent, catalogManifests.Card],
  [Button as CatalogComponent, catalogManifests.Button],
  [Loading as CatalogComponent, loadingManifest],
]).components;
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
          <view className="status">
            <view className={`status-dot status-dot--${progress.status}`} />
            <text className="status-text">{statusText}</text>
          </view>
          <view className="replay-button" bindtap={replay}>
            <text className="replay-icon">↻</text>
            <text className="replay-label">Replay</text>
          </view>
        </view>

        {session?.store && (
          <scroll-view scroll-orientation="vertical" className="scroll">
            <A2UI
              key={sessionId}
              messageStore={session.store}
              catalogs={ALL_BUILTINS}
              onAction={(action) => {
                void agentRef.current?.onAction(action);
              }}
              wrapSurface={(children) => <view className="a2ui-surface">{children}</view>}
              renderEmpty={() => (
                <view className="empty-state">
                  <view className="loading-mark" />
                  <text className="empty-title">Rendering UI</text>
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
