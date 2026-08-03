import { describe, expect, it, rs } from "@rstest/core";

// Regression for lynx-family/lynx-examples#390: dispatching on
// `lynx.getCoreContext()` from the main thread is a self-loop and never
// reaches the background thread, so `bindBackgroundEvent` taps silently
// did nothing on devices.
describe("main thread → background event channel", () => {
  it("bindBackgroundEvent forwards a tap to the background handler", async () => {
    lynxTestingEnv.switchToBackgroundThread();
    const { setBackgroundEventHandler } = await import(
      "../src/common/background/event.js"
    );
    const received = rs.fn(() => true);
    setBackgroundEventHandler(received);

    lynxTestingEnv.switchToMainThread();
    const { bindBackgroundEvent } = await import(
      "../src/common/main-thread/event.js"
    );
    const page = __CreatePage("0", 0);
    const button = __CreateView(0);
    __AppendElement(page, button);
    bindBackgroundEvent(button, "tap", "bump", { from: "test" });

    // Simulate the user tap on the main thread (listeners are stored by the
    // __AddEventListener polyfill in test/setup.ts).
    for (const handler of (button as any).__vanillaListeners["tap"]) {
      handler();
    }

    expect(received).toHaveBeenCalledTimes(1);
    expect(received).toHaveBeenCalledWith("bump", { from: "test" });
  });
});
