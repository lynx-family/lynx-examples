import type { ElementRef } from "@lynx-js/type-element-api";

import { dispatchEventToBackgroundEventName } from "../constant.js";

type MainThreadEventHandler = (...args: unknown[]) => unknown;

type MainThreadEventListener = {
  node: ElementRef;
  name: string;
  handler: MainThreadEventHandler;
  eventOptions?: Record<string, unknown>;
};

const listeners: MainThreadEventListener[] = [];

export function bindMainThreadEvent(
  node: ElementRef,
  name: string,
  handler: MainThreadEventHandler,
  eventOptions: Record<string, unknown> = {},
): void {
  __AddEventListener(node, name, handler, eventOptions);

  const listener = { node, name, handler, eventOptions };
  listeners.push(listener);
}

export function bindBackgroundEvent(
  node: ElementRef,
  name: string,
  handlerName: string,
  data?: unknown,
): void {
  bindMainThreadEvent(node, name, () => {
    lynx.getCoreContext().dispatchEvent({
      type: dispatchEventToBackgroundEventName,
      data: { handlerName, data },
    });
  });
}

function isSameElement(left: ElementRef, right: ElementRef): boolean {
  return __ElementIsEqual(left, right);
}

export function clearNodeEvents(element: ElementRef): void {
  const children = __GetChildren(element);
  for (const child of children) {
    clearNodeEvents(child);
  }

  for (let index = listeners.length - 1; index >= 0; index -= 1) {
    const listener = listeners[index];
    if (!isSameElement(listener.node, element)) continue;
    listeners.splice(index, 1);
    __RemoveEventListener(
      listener.node,
      listener.name,
      listener.handler,
      listener.eventOptions,
    );
  }
}

export function clearAllEvents(): void {
  const currentListeners = listeners.splice(0);
  for (const { node, name, handler, eventOptions } of currentListeners) {
    __RemoveEventListener(node, name, handler, eventOptions);
  }
}

export function clearNodesEvents(elements: ElementRef[]): void {
  for (const element of elements) {
    clearNodeEvents(element);
  }
}
