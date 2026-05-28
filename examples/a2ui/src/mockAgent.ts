import type { MessageStore, ServerToClientMessage, UserActionPayload } from "@lynx-js/genui/a2ui";

export interface MockAgentProgress {
  deliveredCount: number;
  totalCount: number;
  status: "idle" | "streaming" | "done";
}

export interface MockAgentOptions {
  initialMessages: readonly ServerToClientMessage[];
  actionMocks?: Record<string, readonly ServerToClientMessage[]>;
  delayMs?: number;
  onProgress?: (progress: MockAgentProgress) => void;
}

export interface MockAgent {
  start(): Promise<void>;
  onAction(action: UserActionPayload): Promise<void>;
  stop(): void;
}

export function createMockAgent(
  store: MessageStore,
  options: MockAgentOptions,
): MockAgent {
  const actionMocks = options.actionMocks ?? {};
  const delayMs = options.delayMs ?? 700;
  let started: Promise<void> | null = null;
  let sessionId = 0;
  let stopped = false;

  const emitProgress = (
    totalCount: number,
    status: MockAgentProgress["status"],
  ) => {
    options.onProgress?.({
      deliveredCount: store.getSnapshot().length,
      totalCount,
      status,
    });
  };

  const sleep = (ms: number) => {
    if (ms <= 0) {
      return Promise.resolve();
    }
    return new Promise<void>((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  const streamInto = async (
    messages: readonly ServerToClientMessage[],
    activeSessionId: number,
  ) => {
    emitProgress(messages.length, "streaming");
    for (const message of messages) {
      if (stopped || activeSessionId !== sessionId) {
        emitProgress(messages.length, "idle");
        return;
      }
      store.push(message);
      emitProgress(messages.length, "streaming");
      await sleep(delayMs);
    }
    if (stopped || activeSessionId !== sessionId) {
      emitProgress(messages.length, "idle");
      return;
    }
    emitProgress(messages.length, "done");
  };

  return {
    start() {
      stopped = false;
      const activeSessionId = sessionId;
      started ??= streamInto(options.initialMessages, activeSessionId);
      return started;
    },
    async onAction(action) {
      if (stopped) {
        return;
      }
      const messages = actionMocks[action.name];
      if (!messages) {
        return;
      }
      const activeSessionId = sessionId;
      await streamInto(messages, activeSessionId);
    },
    stop() {
      stopped = true;
      sessionId += 1;
      emitProgress(options.initialMessages.length, "idle");
    },
  };
}
