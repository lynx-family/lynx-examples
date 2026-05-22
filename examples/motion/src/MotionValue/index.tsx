import { motionValue } from "@lynx-js/motion";
import type { MotionValue } from "@lynx-js/motion";
import { animate } from "@lynx-js/motion";
import { root, runOnMainThread, useEffect, useMainThreadRef } from "@lynx-js/react";
import type { MainThread } from "@lynx-js/types";

import { ThemeFrame } from "../shared/ThemeFrame";
import "./styles.css";

export default function Basic() {
  const boxMTRef = useMainThreadRef<MainThread.Element>(null);
  const animateMTRef = useMainThreadRef<ReturnType<typeof animate> | null>(
    null,
  );
  const valueMTRef = useMainThreadRef<MotionValue<number>>();
  const unsubscribeMTRef = useMainThreadRef<(() => void) | null>(null);

  function bindMotionValueCallback() {
    "main thread";

    valueMTRef.current ??= motionValue(0.5);

    unsubscribeMTRef.current = valueMTRef.current.on("change", (value) => {
      boxMTRef.current?.setStyleProperties({
        transform: `scale(${value})`,
      });
    });
  }

  function startAnimation() {
    "main thread";

    bindMotionValueCallback();

    if (valueMTRef.current) {
      animateMTRef.current = animate(valueMTRef.current, [0.8, 1.4], {
        duration: 1,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      });
    }
  }

  function endAnimation() {
    "main thread";

    animateMTRef.current?.stop();

    if (unsubscribeMTRef.current) {
      unsubscribeMTRef.current();
      unsubscribeMTRef.current = null;
    }
  }

  useEffect(() => {
    void runOnMainThread(startAnimation)();
    return () => {
      void runOnMainThread(endAnimation)();
    };
  }, []);

  return (
    <ThemeFrame>
      <view className="case-container">
        <view
          className="motion-box"
          main-thread:ref={boxMTRef}
        >
        </view>
      </view>
    </ThemeFrame>
  );
}

root.render(<Basic />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
