import { root } from "@lynx-js/react";

import { Caption } from "../shared/components/caption/index.jsx";
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
      <Caption
        title="Color Wheels"
        subtitle="Powered by CSS conic-gradient"
        footnote="Requires Lynx SDK 3.6+"
      />
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
