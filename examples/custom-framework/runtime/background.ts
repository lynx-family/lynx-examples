import type { MessageEvent } from "@lynx-js/types";

import {
  type ActionMap,
  type ComponentDefinition,
  type FrameworkIntent,
  INTENT_EVENT,
  type NodeDefinition,
  PATCH_EVENT,
  type SetTextPatch,
  type TextNodeDefinition,
} from "./types.js";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isIntent(value: unknown): value is FrameworkIntent {
  if (!isRecord(value) || typeof value["type"] !== "string") return false;
  switch (value["type"]) {
    case "destroy":
      return true;
    case "run":
      return typeof value["task"] === "string";
    case "initialize":
    case "update":
      return isRecord(value["state"]);
    default:
      return false;
  }
}

function getTextNodes(nodes: NodeDefinition[]): TextNodeDefinition[] {
  return nodes.flatMap((node) => node.type === "view" ? getTextNodes(node.children) : [node]);
}

export function startBackground(
  component: ComponentDefinition,
  actions: ActionMap,
): void {
  const mainThread = lynx.getCoreContext();
  const state = Object.fromEntries(
    Object.entries(component.state).map(([name, definition]) => [
      name,
      definition.initialValue,
    ]),
  ) as Record<string, string>;
  const textNodes = getTextNodes(component.nodes);
  let destroyed = false;

  const sendPatch = (patch: SetTextPatch[]): void => {
    if (destroyed || patch.length === 0) return;
    mainThread.dispatchEvent({ data: patch, type: PATCH_EVENT });
  };

  const updateState = (name: string, value: string, emit: boolean): void => {
    if (!(name in component.state) || state[name] === value) return;
    state[name] = value;
    if (!emit) return;

    sendPatch(
      textNodes.flatMap((node): SetTextPatch[] =>
        node.value === name
          ? [["__SetAttribute", node.id, "text", value]]
          : []
      ),
    );
  };

  const applyState = (nextState: Record<string, unknown>, emit: boolean): void => {
    for (const [name, value] of Object.entries(nextState)) {
      if (typeof value === "string") updateState(name, value, emit);
    }
  };

  const runTask = async (taskName: string): Promise<void> => {
    const task = component.tasks.find((candidate) => candidate.name === taskName);
    if (!task) {
      lynx.reportError(new Error(`Unknown task: ${taskName}`));
      return;
    }

    const action = actions[task.action.name];
    if (!action) {
      lynx.reportError(new Error(`Unknown action: ${task.action.name}`));
      return;
    }

    try {
      const value = await action(...task.action.arguments);
      if (destroyed) return;
      if (typeof value !== "string") {
        throw new TypeError(
          `Action ${task.action.name} must return a string for state ${task.target}`,
        );
      }
      updateState(task.target, value, true);
    } catch (error) {
      lynx.reportError(
        error instanceof Error ? error : new Error(String(error)),
      );
    }
  };

  const onIntent = (event: MessageEvent): void => {
    if (destroyed || !isIntent(event.data)) return;
    const intent = event.data;
    switch (intent.type) {
      case "initialize":
        applyState(intent.state, false);
        break;
      case "update":
        applyState(intent.state, true);
        break;
      case "run":
        void runTask(intent.task);
        break;
      case "destroy":
        destroyed = true;
        mainThread.removeEventListener(INTENT_EVENT, onIntent);
        break;
    }
  };

  mainThread.addEventListener(INTENT_EVENT, onIntent);
}
