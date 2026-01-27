import { root } from "@lynx-js/react";

import "./index.css";

function App() {
  return (
    <view className="design-container">
      <view className="wheel gradient-disc" />
      <view className="wheel gradient-ring">
        <view className="wheel-hole" />
        <view className="wheel-picker" />
      </view>
      <view className="wheel gradient-offset" />
      <view className="caption-container">
        <text className="title">Color Wheels</text>
        <text className="subtitle">Powered by CSS conic-gradient</text>
        <text className="footnote">Requires Lynx SDK 3.6+</text>
      </view>
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
