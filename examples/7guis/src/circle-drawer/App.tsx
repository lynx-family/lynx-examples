import { useCallback, useRef, useState } from "@lynx-js/react";

interface Circle {
  id: number;
  x: number;
  y: number;
  r: number;
}

export function App() {
  const [circles, setCircles] = useState<Circle[]>([]);
  const [selectedId, setSelectedId] = useState(-1);
  const [adjusting, setAdjusting] = useState(false);
  const [historyIndex, setHistoryIndex] = useState(0);
  const historyRef = useRef<Circle[][]>([[]]);
  const nextIdRef = useRef(0);

  const push = useCallback(
    (newCircles: Circle[]) => {
      const history = historyRef.current;
      const newIndex = historyIndex + 1;
      history.length = newIndex;
      history.push(newCircles.map((c) => ({ ...c })));
      setHistoryIndex(newIndex);
    },
    [historyIndex],
  );

  const onCanvasTap = useCallback(
    (e: any) => {
      if (adjusting) {
        setAdjusting(false);
        setSelectedId(-1);
        push(circles);
        return;
      }

      const x: number = e.detail?.x ?? e.touches?.[0]?.pageX ?? 0;
      const y: number = e.detail?.y ?? e.touches?.[0]?.pageY ?? 0;

      const hit = [...circles].reverse().find((c) => {
        const dx = c.x - x;
        const dy = c.y - y;
        return Math.sqrt(dx * dx + dy * dy) <= c.r;
      });

      if (hit) {
        setSelectedId(hit.id);
      } else {
        const newCircle: Circle = {
          id: nextIdRef.current++,
          x,
          y,
          r: 30,
        };
        const newCircles = [...circles, newCircle];
        setCircles(newCircles);
        setSelectedId(-1);
        push(newCircles);
      }
    },
    [adjusting, circles, push],
  );

  const startAdjust = useCallback(() => {
    if (selectedId >= 0) {
      setAdjusting(true);
    }
  }, [selectedId]);

  const adjustRadius = useCallback(
    (delta: number) => {
      setCircles(
        circles.map((c) =>
          c.id === selectedId
            ? { ...c, r: Math.max(5, Math.min(150, c.r + delta)) }
            : c
        ),
      );
    },
    [circles, selectedId],
  );

  const undo = useCallback(() => {
    const history = historyRef.current;
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setCircles(history[newIndex].map((c) => ({ ...c })));
      setHistoryIndex(newIndex);
      setSelectedId(-1);
      setAdjusting(false);
    }
  }, [historyIndex]);

  const redo = useCallback(() => {
    const history = historyRef.current;
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setCircles(history[newIndex].map((c) => ({ ...c })));
      setHistoryIndex(newIndex);
      setSelectedId(-1);
      setAdjusting(false);
    }
  }, [historyIndex]);

  const selectedCircle = circles.find((c) => c.id === selectedId);

  return (
    <view
      style={{
        width: "100%",
        height: "100vh",
        minHeight: "400px",
        backgroundColor: "#f0f0f0",
        position: "relative",
      }}
      bindtap={onCanvasTap}
    >
      {/* Hint text */}
      {circles.length === 0 && (
        <text
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#bbb",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          Tap to draw circles
        </text>
      )}

      {/* Circles */}
      {circles.map((circle) => (
        <view
          key={circle.id}
          style={{
            position: "absolute",
            left: `${circle.x - circle.r}px`,
            top: `${circle.y - circle.r}px`,
            width: `${circle.r * 2}px`,
            height: `${circle.r * 2}px`,
            borderRadius: `${circle.r}px`,
            backgroundColor: circle.id === selectedId ? "#ccc" : "#fff",
            borderWidth: "1px",
            borderColor: "#333",
          }}
        />
      ))}

      {/* Undo / Redo */}
      <view
        style={{
          position: "absolute",
          top: "10px",
          left: "0px",
          right: "0px",
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        <view
          style={{
            padding: "6px 16px",
            backgroundColor: historyIndex > 0 ? "#0077ff" : "#ccc",
            borderRadius: "6px",
          }}
          bindtap={undo}
        >
          <text style={{ color: "#fff", fontSize: "14px" }}>Undo</text>
        </view>
        <view
          style={{
            padding: "6px 16px",
            backgroundColor: historyIndex < historyRef.current.length - 1
              ? "#0077ff"
              : "#ccc",
            borderRadius: "6px",
          }}
          bindtap={redo}
        >
          <text style={{ color: "#fff", fontSize: "14px" }}>Redo</text>
        </view>
      </view>

      {/* Adjust controls */}
      {selectedId >= 0 && (
        <view
          style={{
            position: "absolute",
            bottom: "20px",
            left: "0px",
            right: "0px",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {!adjusting
            ? (
              <view
                style={{
                  padding: "8px 20px",
                  backgroundColor: "#0077ff",
                  borderRadius: "6px",
                }}
                bindtap={startAdjust}
              >
                <text style={{ color: "#fff", fontSize: "14px" }}>
                  Adjust Radius
                </text>
              </view>
            )
            : (
              <view style={{ alignItems: "center", gap: "6px" }}>
                <text style={{ fontSize: "14px" }}>
                  Radius: {selectedCircle?.r ?? 0}
                </text>
                <view
                  style={{ display: "flex", flexDirection: "row", gap: "8px" }}
                >
                  <view
                    style={{
                      padding: "6px 16px",
                      backgroundColor: "#eee",
                      borderRadius: "4px",
                    }}
                    bindtap={() => adjustRadius(-5)}
                  >
                    <text style={{ fontSize: "16px" }}>-</text>
                  </view>
                  <view
                    style={{
                      padding: "6px 16px",
                      backgroundColor: "#eee",
                      borderRadius: "4px",
                    }}
                    bindtap={() => adjustRadius(5)}
                  >
                    <text style={{ fontSize: "16px" }}>+</text>
                  </view>
                </view>
              </view>
            )}
        </view>
      )}
    </view>
  );
}
