import { runOnMainThread, useEffect } from "@lynx-js/react";
import { createBackgroundRuntime } from "./background.js";
import type { BackgroundSessionConfig, PlainObject } from "./types.js";

declare const __LYNX_WPT_TESTHARNESS_SESSION__: BackgroundSessionConfig | null;

/** Start after React has committed the card, so computed-style targets exist. */
export function useTestharness(invoke: (name: string, input: PlainObject) => PlainObject): void {
  useEffect(() => {
    if (__LYNX_WPT_TESTHARNESS_SESSION__ === null) return;
    const callMainThread = runOnMainThread(invoke);
    const runtime = createBackgroundRuntime(__LYNX_WPT_TESTHARNESS_SESSION__, {
      callLepusMethod: (name, input, callback) => {
        void callMainThread(name, input).then(callback);
      },
      fetch: (url, init) => lynx.fetch(url, init),
      sleep: (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds)),
      now: () => Date.now(),
    });
    void runtime.onLoad({});
  }, []);
}
