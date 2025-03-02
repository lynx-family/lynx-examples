import { root, useState } from "@lynx-js/react";
import type { TouchEvent } from "@lynx-js/types";

export function ComponentA() {
  const [scrollContainer, setScrollContainer] = useState<string>("");
  const [cnt, setCnt] = useState<number>(0);

  function handleScroll(e: TouchEvent) {
    setScrollContainer(e.target.id);
  }

  function handleTap(e: TouchEvent) {
    setCnt(cnt + 1);
  }

  return (
    <view
      style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}
      global-bindscroll={handleScroll}
      global-bindtap={handleTap}
    >
      <text>
        Counts the number of clicks on a page: <text style={{ color: "red" }}>{cnt}</text>
      </text>
      <text>
        Current scroll container: <text style={{ color: "green" }}>{scrollContainer}</text>
      </text>
    </view>
  );
}

export function ComponentB() {
  return (
    <view
      style={{
        width: "calc(100% - 10px)",
        height: "calc(100% - 45px)",
        marginTop: "40px",
        marginLeft: "5px",
        marginRight: "5px",
        marginBottom: "5px",
      }}
    >
      <scroll-view
        scroll-orientation="vertical"
        style={{ width: "100%", height: "50%", borderWidth: "2px" }}
        id="scroll-1"
        bindscroll={(e) => {}}
      >
        {[0, 1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <view
              style={{
                width: "calc(100% - 10px)",
                height: "200px",
                margin: "5px",
                backgroundColor: "orange",
                borderRadius: "5px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <text>scroll-1-item-{item + 1}</text>
            </view>
          );
        })}
      </scroll-view>
      <scroll-view
        scroll-orientation="vertical"
        style={{ width: "100%", height: "calc(50% - 10px)", marginTop: "10px", borderWidth: "2px" }}
        id="scroll-2"
        bindscroll={(e) => {}}
      >
        {[0, 1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <view
              style={{
                width: "calc(100% - 10px)",
                height: "200px",
                margin: "5px",
                backgroundColor: "purple",
                borderRadius: "5px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <text>scroll-2-item-{item + 1}</text>
            </view>
          );
        })}
      </scroll-view>
    </view>
  );
}

export default function App() {
  return (
    <view style={{ width: "100%", height: "90%" }}>
      <view style={{ width: "100%", height: "150px", backgroundColor: "yellow" }}>
        <view style={{ position: "absolute" }}>
          <text style={{ color: "blue" }}>ComponentA</text>
        </view>
        <ComponentA />
      </view>
      <view style={{ width: "100%", height: "calc(100% - 165px)", marginTop: "15px", backgroundColor: "#ccc" }}>
        <view style={{ position: "absolute" }}>
          <text style={{ color: "blue" }}>ComponentB</text>
        </view>
        <ComponentB />
      </view>
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
