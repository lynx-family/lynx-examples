import { root, useEffect, useRef, useState } from "@lynx-js/react";

import "./index.css";

import arrow from "../../resource/arrow.png";
import lynxLogo from "../../resource/lynxlogo.png";

const RequestAnimationFrame = () => {
  const lastUptimeRef = useRef(0);
  const framesRef = useRef(0);
  const [fpsStr, setFpsStr] = useState("0");

  function drawFrame(timestamp: number) {
    requestAnimationFrame(drawFrame);
    framesRef.current++;
    const time = Math.floor(timestamp / 3000) | 0;

    if (time !== lastUptimeRef.current) {
      setFpsStr(String(Math.floor(framesRef.current / 3)));
      console.log("FPS: " + fpsStr);
      lastUptimeRef.current = time;
      framesRef.current = 0;
    }
  }
  useEffect(() => {
    requestAnimationFrame(drawFrame);
  }, []);
  return (
    <page>
      <view className="Background" />
      <view className="App">
        <view className="Banner">
          <view className="Logo">
            <image src={lynxLogo} className="Logo--lynx" />
          </view>
          <text className="Title">React</text>
          <text className="Subtitle">on Lynx</text>
        </view>
        <view className="Content">
          <image src={arrow} className="Arrow" />
          <text className="Description">{"FPS: " + fpsStr}</text>
          <text className="Hint">
            Edit<text style={{ fontStyle: "italic", color: "rgba(255, 255, 255, 0.85)" }}>{" src/App.tsx "}</text>
            to see updates!
          </text>
        </view>
        <view style={{ flex: 1 }}></view>
      </view>
    </page>
  );
};

root.render(<RequestAnimationFrame />);
