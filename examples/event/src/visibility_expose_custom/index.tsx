import { root, useState } from "@lynx-js/react";
import type { Target, UIAppearanceDetailEvent } from "@lynx-js/types";

export default function App() {
  const [eventLog, setEventLog] = useState<string>("");

  function handleUIAppear(e: UIAppearanceDetailEvent<Target>) {
    setEventLog((log) => log + (log === "" ? "" : ", ") + e.detail.dataset.item);
  }

  function handleUIDisappear(e: UIAppearanceDetailEvent<Target>) {
    let log = eventLog.split(", ");
    log = log.filter(item => item !== e.detail.dataset.item);
    log.sort();
    setEventLog(log.join(", "));
  }

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
        }}
      >
        <text>Exposed node:</text>
        <text style={{ color: "red" }}>{eventLog}</text>
      </view>
      <scroll-view
        scroll-orientation="vertical"
        style={{
          width: "100%",
          height: "calc(100% - 165px)",
          backgroundColor: "yellow",
          marginTop: "15px",
          paddingTop: "40px",
        }}
        id="container"
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
                alignItems: "center",
              }}
              data-item={`scroll-item-${item + 1}`}
              binduiappear={handleUIAppear}
              binduidisappear={handleUIDisappear}
            >
              <text>scroll-item-{item + 1}</text>
            </view>
          );
        })}
        <view style={{ position: "absolute" }}>
          <text style={{ color: "blue" }}>scroll container</text>
        </view>
      </scroll-view>
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
