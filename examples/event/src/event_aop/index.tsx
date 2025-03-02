import { root, useMemo, useState } from "@lynx-js/react";
import type { TouchEvent } from "@lynx-js/types";

export default function App() {
  const [cnt, setCnt] = useState<number>(0);

  useMemo(() => {
    "background-only";
    lynx.beforePublishEvent.add("tap", () => {
      setCnt((cnt) => cnt + 1);
    });
  }, []);

  return (
    <view
      style={{ width: "100%", height: "90%" }}
    >
      <view
        style={{
          width: "calc(100% - 10px)",
          height: "150px",
          margin: "5px",
          borderWidth: "2px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <text>
          Counts the number of clicks on a page: <text style={{ color: "red" }}>{cnt}</text>
        </text>
      </view>
      <scroll-view
        scroll-orientation="vertical"
        style={{ width: "100%", height: "calc(100% - 150px)" }}
      >
        {[0, 1].map((item) => {
          return (
            <view
              style={{
                width: "calc(100% - 10px)",
                height: "150px",
                margin: "5px",
                backgroundColor: "yellow",
                borderRadius: "5px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <text>{"Don't listen tap event-" + (item + 1)}</text>
            </view>
          );
        })}
        {[0, 1, 2, 3].map((item) => {
          return (
            <view
              style={{
                width: "calc(100% - 10px)",
                height: "150px",
                margin: "5px",
                backgroundColor: "orange",
                borderRadius: "5px",
                justifyContent: "center",
                alignItems: "center",
              }}
              bindtap={(e: TouchEvent) => {}}
            >
              <text>{"Listen tap event-" + (item + 1)}</text>
            </view>
          );
        })}
      </scroll-view>
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
