import { root, useState } from "@lynx-js/react";
import { useLynxGlobalEventListener } from "@lynx-js/react";

export default function App() {
  const [eventLog, setEventLog] = useState<string>("");
  useLynxGlobalEventListener("onWindowResize", (e) => {
    setEventLog("" + e);
  });

  return (
    <view
      style={{
        width: "100%",
        height: "100%",
        borderWidth: "1px",
        borderColor: "red",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <text>Listen onWindowResize Event:</text>
      <text>
        LynxView's width has changed to: <text style={{ color: "red" }}>{eventLog}</text>
      </text>
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
