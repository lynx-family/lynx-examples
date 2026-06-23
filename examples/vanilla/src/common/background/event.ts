import type { MessageEvent } from "@lynx-js/types";

import { dispatchEventToBackgroundEventName } from "../constant.js";

type BackgroundEventPayload = {
  handlerName?: unknown;
  data?: unknown;
};

type BackgroundEventListener = {
  name: string;
  handler: (event: MessageEvent) => void;
};

const listeners: BackgroundEventListener[] = [];

export function setBackgroundEventHandler(
  handleEvent: (handlerName: string, data: unknown) => unknown,
): void {
  const handler = (event: MessageEvent): void => {
    const payload = event.data as BackgroundEventPayload;
    if (!payload || typeof payload.handlerName !== "string") return;
    handleEvent(payload.handlerName, payload.data);
  };
  lynx.getCoreContext().addEventListener(dispatchEventToBackgroundEventName, handler);
  listeners.push({ name: dispatchEventToBackgroundEventName, handler });
}

export function clearBackgroundEvents(): void {
  const currentListeners = listeners.splice(0);
  for (const { name, handler } of currentListeners) {
    lynx.getCoreContext().removeEventListener(name, handler);
  }
}
