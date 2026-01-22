import { root } from "@lynx-js/react";

import "./index.css";

function App() {
  return (
    <view className="container">
      <view className="stage">
        <view className="inner-stage">
          <view className="dot g1" />
          <view className="dot g2" />
          <view className="dot g3" />
          <view className="dot g4" />
        </view>
      </view>
      <view className="caption-container">
        <text className="title">Gooey Effect</text>
        <text className="subtitle">Powered by CSS filter: contrast + blur</text>
        <text className="footnote">Requires Lynx SDK 3.6+</text>
      </view>
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
