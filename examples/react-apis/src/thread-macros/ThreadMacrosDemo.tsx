import { useState } from "@lynx-js/react";
import { App } from "./App.jsx";

type PreviewPhase = "first-frame" | "background";

function FirstFrameSnapshot() {
  return (
    <view className="card">
      <text className="cardText title">ReactLynx</text>
      <text className="cardText">0</text>
      <text className="cardText">main</text>
    </view>
  );
}

export function ThreadMacrosDemo() {
  const runtimePhase: PreviewPhase = __MAIN_THREAD__ ? "first-frame" : "background";
  const [previewPhase, setPreviewPhase] = useState<PreviewPhase>(runtimePhase);
  const isLiveResult = previewPhase === runtimePhase;

  return (
    <view className="threadMacrosDemo">
      <view className="phaseSelector">
        <view
          className="phaseButton"
          bindtap={() => setPreviewPhase("first-frame")}
        >
          <text className="phaseButtonText">First-frame result</text>
        </view>
        <view
          className="phaseButton"
          bindtap={() => setPreviewPhase("background")}
        >
          <text className="phaseButtonText">Background takeover</text>
        </view>
      </view>

      <text className="phaseNote">
        {isLiveResult
          ? "Select a result to compare the two phases."
          : "A visual replay of the main-thread first frame."}
      </text>

      {isLiveResult ? <App /> : <FirstFrameSnapshot />}
    </view>
  );
}
