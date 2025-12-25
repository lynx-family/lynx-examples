import { root } from "@lynx-js/react";
import _ from "lodash-es";
import { Button } from "./components";

function App() {
  return (
    <view>
      <text style={{ textAlign: "center" }}>Hello, {_.upperCase("world")}!</text>
      <Button>
        <text style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "center", fontWeight: "bold" }}>
          Click me
        </text>
      </Button>
    </view>
  );
}

root.render(
  <App />,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
