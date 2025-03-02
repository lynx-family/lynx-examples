import { root, useState } from "@lynx-js/react";
import type { TouchEvent } from "@lynx-js/types";

export default function App() {
  const [cnt, setCnt] = useState<number>(0);

  function handleTap(e: TouchEvent) {
    setCnt(cnt + 1);
  }

  return (
    <view
      style={{ width: "100%", height: "90%" }}
      capture-bindtap={handleTap}
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
        {[0, 1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <view
              style={{
                width: "calc(100% - 10px)",
                height: "150px",
                margin: "5px",
                backgroundColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${
                  Math.floor(Math.random() * 256)
                })`,
                borderRadius: "5px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <text>item-{item + 1}</text>
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
