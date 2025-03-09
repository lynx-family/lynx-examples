import { root } from "@lynx-js/react";

import "./index.css";

function App() {
  return (
    <view
      style={{
        flexDirection: "column",
        marginTop: "50%",
        transform: "translate(-50%, -50%)",
        marginLeft: "50%",
        width: "150px",
        height: "150px",
      }}
      className="bg-gradient"
    >
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
