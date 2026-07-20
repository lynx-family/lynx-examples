import { animate } from "@lynx-js/motion";
import { root, runOnMainThread, useEffect, useMainThreadRef } from "@lynx-js/react";
import type { MainThread } from "@lynx-js/types";

import { ThemeFrame } from "../shared/ThemeFrame";
import "./styles.css";

export default function Spring() {
  const animateMTRef = useMainThreadRef<ReturnType<typeof animate> | null>(
    null,
  );
  const boxMTRef = useMainThreadRef<MainThread.Element>(null);
  const startTimerMTRef = useMainThreadRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  function startAnimationNow() {
    "main thread";

    if (boxMTRef.current) {
      animateMTRef.current = animate(
        boxMTRef.current,
        { rotate: 90 },
        { type: "spring", repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.2 },
      );
    }
  }

  function startAnimation() {
    "main thread";

    if (startTimerMTRef.current) {
      clearTimeout(startTimerMTRef.current);
    }

    startTimerMTRef.current = setTimeout(() => {
      startTimerMTRef.current = null;
      startAnimationNow();
    }, 1000);
  }

  function endAnimation() {
    "main thread";

    if (startTimerMTRef.current) {
      clearTimeout(startTimerMTRef.current);
      startTimerMTRef.current = null;
    }

    animateMTRef.current?.stop();
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

root.render(<Spring />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
