import type {
  ElementEventCallback,
  ElementEventListenerOptions,
  ElementRef,
  RawTextElementRef,
} from "@lynx-js/type-element-api";
import type { MessageEvent } from "@lynx-js/types";

import {
  type ComponentDefinition,
  type FrameworkIntent,
  INTENT_EVENT,
  type NodeDefinition,
  PATCH_EVENT,
  type SetTextPatch,
} from "./types.js";

interface EventBinding {
  callback: ElementEventCallback;
  name: string;
  node: ElementRef;
  options: ElementEventListenerOptions;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function lifecycleData(event: MessageEvent): Record<string, unknown> {
  const data = Array.isArray(event.data) ? event.data[0] : undefined;
  return isRecord(data) ? data : {};
}

function resolveState(
  component: ComponentDefinition,
  input: Record<string, unknown>,
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(component.state).map(([name, definition]) => [
      name,
      typeof input[name] === "string" ? input[name] : definition.initialValue,
    ]),
  );
}

function isSetTextPatch(value: unknown): value is SetTextPatch {
  return Array.isArray(value)
    && value.length === 4
    && value[0] === "__SetAttribute"
    && typeof value[1] === "string"
    && value[2] === "text"
    && typeof value[3] === "string";
}

export function startMainThread(component: ComponentDefinition): void {
  const engine = lynx.getEngine();
  const backgroundThread = lynx.getJSContext();
  const page = __CreatePage("0", 0);
  const pageId = __GetElementUniqueID(page);
  const textNodes = new Map<string, RawTextElementRef>();
  const eventBindings: EventBinding[] = [];
  let destroyed = false;
  let rendered = false;

  const dispatchIntent = (data: FrameworkIntent): void => {
    backgroundThread.dispatchEvent({ data, type: INTENT_EVENT });
  };

  const renderPage = (state: Record<string, string>): void => {
    if (rendered || destroyed) return;
    rendered = true;

    const renderNode = (node: NodeDefinition): ElementRef => {
      if (node.type === "view") {
        const view = __CreateView(pageId);
        __SetID(view, node.id);
        __SetClasses(view, node.className);
        for (const child of node.children) {
          __AppendElement(view, renderNode(child));
        }
        return view;
      }

      const textElement = __CreateText(pageId);
      const rawText = __CreateRawText(state[node.value] ?? "");
      __SetID(textElement, node.id);
      __SetClasses(textElement, node.className);
      textNodes.set(node.id, rawText);

      for (const event of component.events) {
        if (event.node !== node.id) continue;
        const options: ElementEventListenerOptions = {};
        const callback: ElementEventCallback = () => {
          dispatchIntent({ task: event.task, type: "run" });
        };
        __AddEventListener(textElement, event.name, callback, options);
        eventBindings.push({
          callback,
          name: event.name,
          node: textElement,
          options,
        });
      }

      __AppendElement(textElement, rawText);
      return textElement;
    };

    for (const node of component.nodes) {
      __AppendElement(page, renderNode(node));
    }
  };

  const onRenderPage = (event: MessageEvent): void => {
    const state = resolveState(component, lifecycleData(event));
    renderPage(state);
    dispatchIntent({ state, type: "initialize" });
  };

  const onUpdatePage = (event: MessageEvent): void => {
    const update = lifecycleData(event);
    const state = Object.fromEntries(
      Object.keys(component.state).flatMap((name) => typeof update[name] === "string" ? [[name, update[name]]] : []),
    ) as Record<string, string>;
    if (Object.keys(state).length > 0) {
      dispatchIntent({ state, type: "update" });
    }
  };

  const onPatch = (event: MessageEvent): void => {
    if (destroyed || !Array.isArray(event.data)) return;
    let didUpdate = false;

    for (const operation of event.data) {
      if (!isSetTextPatch(operation)) continue;
      const [, id, key, value] = operation;
      const element = textNodes.get(id);
      if (!element) continue;
      __SetAttribute(element, key, value);
      didUpdate = true;
    }

    if (didUpdate) __FlushElementTree();
  };

  const onDestroyLifetime = (): void => {
    if (destroyed) return;
    destroyed = true;
    dispatchIntent({ type: "destroy" });

    for (const binding of eventBindings) {
      __RemoveEventListener(
        binding.node,
        binding.name,
        binding.callback,
        binding.options,
      );
    }
    eventBindings.length = 0;
    textNodes.clear();

    backgroundThread.removeEventListener(PATCH_EVENT, onPatch);
    engine.removeEventListener("__RenderPage", onRenderPage);
    engine.removeEventListener("__UpdatePage", onUpdatePage);
    engine.removeEventListener("__DestroyLifetime", onDestroyLifetime);
  };

  backgroundThread.addEventListener(PATCH_EVENT, onPatch);
  engine.addEventListener("__RenderPage", onRenderPage);
  engine.addEventListener("__UpdatePage", onUpdatePage);
  engine.addEventListener("__DestroyLifetime", onDestroyLifetime);
}
