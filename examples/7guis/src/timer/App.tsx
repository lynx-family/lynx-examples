import { useCallback, useEffect, useRef, useState } from "@lynx-js/react";

export function App() {
  const [duration, setDuration] = useState(15000);
  const [elapsed, setElapsed] = useState(0);
  const lastTimeRef = useRef(Date.now());
  const durationRef = useRef(duration);
  durationRef.current = duration;

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const dt = now - lastTimeRef.current;
      lastTimeRef.current = now;
      const dur = durationRef.current;
      setElapsed((prev) => {
        if (prev < dur) {
          return Math.min(prev + dt, dur);
        }
        return prev;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const progressPct = Math.min(elapsed / duration, 1) * 100;

  const reset = useCallback(() => {
    setElapsed(0);
    lastTimeRef.current = Date.now();
  }, []);

  const adjustDuration = useCallback((delta: number) => {
    setDuration((d) => Math.max(1000, Math.min(30000, d + delta)));
  }, []);

  return (
    <view style={{ padding: "20px", gap: "14px" }}>
      {/* Progress bar */}
      <view style={{ gap: "4px" }}>
        <text style={{ fontSize: "14px", color: "#666" }}>Elapsed Time:</text>
        <view
          style={{
            height: "20px",
            backgroundColor: "#eee",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <view
            style={{
              height: "20px",
              width: `${progressPct}%`,
              backgroundColor: "#0077ff",
              borderRadius: "4px",
            }}
          />
        </view>
      </view>

      <text style={{ fontSize: "20px" }}>
        {(elapsed / 1000).toFixed(1)}s
      </text>

      {/* Duration control */}
      <view style={{ gap: "4px" }}>
        <text style={{ fontSize: "14px", color: "#666" }}>
          Duration: {(duration / 1000).toFixed(1)}s
        </text>
        <view style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
          <view
            style={{
              padding: "6px 16px",
              backgroundColor: "#eee",
              borderRadius: "4px",
            }}
            bindtap={() => adjustDuration(-1000)}
          >
            <text style={{ fontSize: "16px" }}>-1s</text>
          </view>
          <view
            style={{
              padding: "6px 16px",
              backgroundColor: "#eee",
              borderRadius: "4px",
            }}
            bindtap={() => adjustDuration(1000)}
          >
            <text style={{ fontSize: "16px" }}>+1s</text>
          </view>
        </view>
      </view>

      {/* Reset */}
      <view
        style={{
          padding: "10px 20px",
          backgroundColor: "#0077ff",
          borderRadius: "6px",
          alignSelf: "flex-start",
        }}
        bindtap={reset}
      >
        <text style={{ color: "#fff", fontSize: "16px" }}>Reset</text>
      </view>
    </view>
  );
}
