import { root } from "@lynx-js/react";

import { Caption } from "../shared/components/caption/index.jsx";
import "./index.css";

/* Shadow intensity is derived from nested tokens,
 * resolving into layered ambient and rim shadows.
 */
function App() {
  return (
    <view className="design-container">
      <view className="canvas">
        <view className="card ele-1" />
        <view className="card ele-2" />
        <view className="card ele-3" />
        <view className="card ele-4" />
      </view>
      <Caption
        title="Soft Glow"
        subtitle="Powered by Nested CSS Variables"
        footnote="Requires Lynx SDK 3.6+"
      />
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
