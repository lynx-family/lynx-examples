import type { MessageEvent } from "@lynx-js/types";

import { destroyLifetimeEventName, updateDataFromMainThreadEventName } from "../constant.js";
import { type Data, updateDataFromMainThread } from "./data.js";
import { clearBackgroundEvents } from "./event.js";
import { setupPerformanceObserver } from "./performance.js";

export function setupBackground(
  options: {
    enablePerformanceObserver?: boolean;
  } = {},
): void {
  if (options.enablePerformanceObserver) {
    setupPerformanceObserver();
  }
  const coreContext = lynx.getCoreContext();

  const onUpdateDataFromMainThread = (event: MessageEvent): void => {
    const { data } = event;
    if (data && typeof data === "object" && !Array.isArray(data)) {
      updateDataFromMainThread(data as Data);
    }
  };

  const cleanup = (): void => {
    clearBackgroundEvents();
    coreContext.removeEventListener(
      updateDataFromMainThreadEventName,
      onUpdateDataFromMainThread,
    );
    coreContext.removeEventListener(destroyLifetimeEventName, cleanup);
  };

  coreContext.addEventListener(
    updateDataFromMainThreadEventName,
    onUpdateDataFromMainThread,
  );
  coreContext.addEventListener(destroyLifetimeEventName, cleanup);
}
