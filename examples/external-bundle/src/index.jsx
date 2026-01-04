import { root, useState } from "@lynx-js/react";
import _ from "lodash-es";
import { Button } from "./components";

function App() {
  const [count, setCount] = useState(0);

  const onTap = () => {
    setCount(c => c + 1);
  };

  return (
    <view>
      <text style={{ textAlign: "center" }}>Hello, {_.upperCase("world")}!</text>
      <Button>
        <text style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "center", fontWeight: "bold" }} bindtap={onTap}>
          Click me {count}
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
