import { root } from "@lynx-js/react";

import { Caption } from "../shared/components/caption/index.jsx";
import "./index.css";

function App() {
  return (
    <view className="design-container">
      <view className="stage">
        <view className="inner-stage">
          <view className="dot g1" />
          <view className="dot g2" />
          <view className="dot g3" />
          <view className="dot g4" />
        </view>
      </view>
      <Caption
        title="Gooey Effect"
        subtitle="Powered by CSS filter: contrast + blur"
        footnote="Requires Lynx SDK 3.6+"
      />
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
