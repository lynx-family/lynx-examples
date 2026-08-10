import { root, useState } from "@lynx-js/react";
import _ from "lodash-es";
import { Button } from "./components";
import { add, minus } from "./utils";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  const onAdd = () => {
    "background only";
    setCount(c => add(c, 1));
  };

  const onMinus = () => {
    "background only";
    setCount(c => minus(c, 1));
  };

  return (
    <view>
      <text style={{ textAlign: "center" }}>Hello, {_.upperCase("world")}!</text>
      <text style={{ textAlign: "center" }}>Count: {count}</text>
      <Button>
        <text style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "center", fontWeight: "bold" }} bindtap={onAdd}>
          Add 1
        </text>
      </Button>
      <Button>
        <text style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "center", fontWeight: "bold" }} bindtap={onMinus}>
          Minus 1
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
