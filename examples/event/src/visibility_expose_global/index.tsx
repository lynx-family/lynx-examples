import { root, useState } from "@lynx-js/react";
import { useLynxGlobalEventListener } from "@lynx-js/react";

export function ComponentA() {
  const [eventLog, setEventLog] = useState<string>("");

  useLynxGlobalEventListener("exposure", (e) => {
    (e as { "exposure-id": string }[]).forEach((item) => {
      setEventLog((log) => log + (log === "" ? "" : ", ") + item["exposure-id"]);
    });
  });

  useLynxGlobalEventListener("disexposure", (e) => {
    let log = eventLog.split(", ");
    (e as { "exposure-id": string }[]).forEach((item) => {
      log = log.filter(id => id !== item["exposure-id"]);
    });
    log.sort();
    setEventLog(log.join(", "));
  });

  return (
    <view style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
      <text>Exposed nodes:</text>
      <text style={{ color: "red" }}>{eventLog}</text>
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
      <scroll-view scroll-orientation="vertical" style={{ width: "100%", height: "100%", borderWidth: "2px" }}>
        {[0, 1, 2, 3, 4, 5, 6].map((item) => {
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
              exposure-id={`scroll-item-${item + 1}`}
            >
              <text>scroll-item-{item + 1}</text>
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
