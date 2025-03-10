import { root } from "@lynx-js/react";

import "../common.css";

function App() {
  return (
    <view
      className="container"
      style={{
        clipPath: "inset(30px super-ellipse 3 3 50px/50px)",
      }}
    >
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
