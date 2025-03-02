import { root } from "@lynx-js/react";

import "../common.css";

function App() {
  return (
    <view
      class="container"
      style={{
        clipPath: "circle(50% at 50% top)",
      }}
    >
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
