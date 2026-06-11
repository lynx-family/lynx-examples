import { A2UI, Button, Card, Column, createMessageStore, defineCatalog, Image, Row, Text } from "@lynx-js/genui/a2ui";
import type { CatalogComponent, CatalogManifest, MessageStore, ServerToClientMessage } from "@lynx-js/genui/a2ui";
import { catalogManifests } from "@lynx-js/genui/a2ui/catalog";
import { useCallback, useMemo, useRef, useState } from "@lynx-js/react";

import generatedLoadingManifest from "../catalog/Loading/catalog.json";
import { Loading } from "../catalog/Loading/Loading.js";

import { buildSelectMessage, getAgentResponse, initialMessages, resetMessage } from "./demoMessages.js";

import "./Actions.css";

const AGENT_STREAM_DELAY_MS = 600;
const TOAST_DURATION_MS = 1500;
const loadingManifest = generatedLoadingManifest as CatalogManifest;

const ALL_BUILTINS = defineCatalog([
  [Text as CatalogComponent, catalogManifests.Text],
  [Image as CatalogComponent, catalogManifests.Image],
  [Row as CatalogComponent, catalogManifests.Row],
  [Column as CatalogComponent, catalogManifests.Column],
  [Card as CatalogComponent, catalogManifests.Card],
  [Button as CatalogComponent, catalogManifests.Button],
  [Loading as CatalogComponent, loadingManifest],
]).components;

function streamMessages(store: MessageStore, messages: ServerToClientMessage[]) {
  let idx = 0;
  const tick = () => {
    if (idx >= messages.length) return;
    store.push(messages[idx]);
    idx += 1;
    if (idx < messages.length) {
      setTimeout(tick, AGENT_STREAM_DELAY_MS);
    }
  };
  tick();
}

export function Actions() {
  const [toast, setToast] = useState<{ text: string; type: "client" | "agent" } | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const store = useMemo(() => {
    "background only";
    const s = createMessageStore();
    for (const msg of initialMessages) {
      s.push(msg);
    }
    return s;
  }, []);

  const storeRef = useRef<MessageStore>(store);
  const phaseRef = useRef<"idle" | "selected" | "submitted">("idle");

  const showToast = useCallback((text: string, type: "client" | "agent") => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToast({ text, type });
    toastTimerRef.current = setTimeout(() => setToast(null), TOAST_DURATION_MS);
  }, []);

  const handleClientAction = useCallback((answer: string) => {
    storeRef.current.push(buildSelectMessage(answer));
    showToast(`Client: selected "${answer}"`, "client");
  }, []);

  const handleAgentAction = useCallback((answer: string) => {
    showToast("Agent: validating answer...", "agent");
    const response = getAgentResponse(answer);
    if (response) {
      streamMessages(storeRef.current, response);
    }
  }, []);

  const handleAction = useCallback((action: { name: string; context?: Record<string, unknown> }) => {
    if (action.name === "select_answer") {
      const answer = action.context?.answer as string;
      if (answer && phaseRef.current !== "submitted") {
        phaseRef.current = "selected";
        handleClientAction(answer);
      }
    } else if (action.name === "submit_answer") {
      if (phaseRef.current === "idle") return;
      if (phaseRef.current === "submitted") {
        phaseRef.current = "idle";
        storeRef.current.push(resetMessage);
        showToast("Client: reset quiz", "client");
      } else {
        const answer = action.context?.answer as string;
        phaseRef.current = "submitted";
        handleAgentAction(answer);
      }
    }
  }, []);

  if (!store) return null;

  return (
    <view className="page luna-light">
      <scroll-view scroll-y className="a2ui-scroll">
        {store
          && (
            <A2UI
              messageStore={store}
              catalogs={ALL_BUILTINS}
              onAction={handleAction}
              wrapSurface={(children) => <view className="a2ui-light">{children}</view>}
              className="a2ui-container"
            />
          )}
      </scroll-view>
      {toast && (
        <view className={`toast toast--${toast.type}`}>
          <text className="toast-text">{toast.text}</text>
        </view>
      )}
    </view>
  );
}
