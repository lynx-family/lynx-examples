import type { MainThread } from "@lynx-js/types";

export const App = () => {
  function handleTap(e: MainThread.TouchEvent) {
    "main thread";
    e.currentTarget.setStyleProperty(
      "color",
      "linear-gradient(to right, rgb(255,53,26), rgb(0,235,235))",
    );
  }

  return (
    <view>
      <text
        style={{
          fontSize: "20px",
          height: "40px",
          paddingLeft: "10px",
          marginTop: "10px",
        }}
        main-thread:bindtap={handleTap}
      >
        Tap me to change my color!
      </text>
    </view>
  );
};
