import { root, useState } from "@lynx-js/react";
import type { TouchEvent } from "@lynx-js/types";

export default function App() {
  const [tap, setTap] = useState<boolean>(false);
  const [tap1, setTap1] = useState<boolean>(false);
  const [tap11, setTap11] = useState<boolean>(false);
  const [tap2, setTap2] = useState<boolean>(false);
  const [tap22, setTap22] = useState<boolean>(false);

  function handleTap(e: TouchEvent) {
    if (e.currentTarget.id === "tap") {
      setTap(!tap);
    }
    if (e.currentTarget.id === "tap1") {
      setTap1(!tap1);
    }
    if (e.currentTarget.id === "tap11") {
      setTap11(!tap11);
    }
    if (e.currentTarget.id === "tap2") {
      setTap2(!tap2);
    }
    if (e.currentTarget.id === "tap22") {
      setTap22(!tap22);
    }
  }

  function handletouchstart(e: TouchEvent) {
    setTap(false);
    setTap1(false);
    setTap11(false);
    setTap2(false);
    setTap22(false);
  }

  return (
    <view
      id="tap"
      style={{
        width: "calc(100% - 40px)",
        height: "90%",
        margin: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 5px 5px #ccc",
        backgroundColor: tap ? "rgb(255, 179, 0)" : "white",
        justifyContent: "center",
        alignItems: "center",
      }}
      bindtap={handleTap}
      capture-touchstart={handletouchstart}
    >
      <view
        id="tap1"
        style={{
          width: "70%",
          height: "40%",
          marginBottom: "25px",
          borderRadius: "10px",
          boxShadow: "0 0 5px 5px #ccc",
          backgroundColor: tap1 ? "rgb(255, 179, 0)" : "white",
          justifyContent: "center",
          alignItems: "center",
        }}
        bindtap={handleTap}
      >
        <view
          id="tap11"
          style={{
            width: "60%",
            height: "45%",
            borderRadius: "10px",
            boxShadow: "0 0 5px 5px #ccc",
            backgroundColor: tap11 ? "rgb(255, 179, 0)" : "white",
            justifyContent: "center",
            alignItems: "center",
          }}
          bindtap={handleTap}
        >
          <text user-interaction-enabled={false} style={{ color: "green" }}>click me 1</text>
        </view>
      </view>
      <view
        id="tap2"
        style={{
          width: "70%",
          height: "40%",
          marginTop: "25px",
          borderRadius: "10px",
          boxShadow: "0 0 5px 5px #ccc",
          backgroundColor: tap2 ? "rgb(255, 179, 0)" : "white",
          justifyContent: "center",
          alignItems: "center",
        }}
        bindtap={handleTap}
      >
        <view
          id="tap22"
          style={{
            width: "60%",
            height: "45%",
            borderRadius: "10px",
            boxShadow: "0 0 5px 5px #ccc",
            backgroundColor: tap22 ? "rgb(255, 179, 0)" : "white",
            justifyContent: "center",
            alignItems: "center",
          }}
          bindtap={handleTap}
        >
          <text user-interaction-enabled={false} style={{ color: "red" }}>click me 2</text>
        </view>
      </view>
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
