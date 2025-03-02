import { root } from "@lynx-js/react";

import "../common.css";

function App() {
  return (
    <view
      class="container"
      style={{
        background: "linear-gradient(to bottom right, rgb(255,53,26), rgb(0,235,235) 50%)",
        clipPath: "ellipse(50px 60px at 10% 20%)",
      }}
    >
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
