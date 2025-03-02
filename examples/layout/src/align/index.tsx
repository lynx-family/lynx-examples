import { root } from "@lynx-js/react";

import "./index.scss";

const AlignExample = () => {
  return (
    <view className="container">
      <view
        className="linear box"
        style={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <text>linear item 1</text>
        <text style={{ alignSelf: "end" }}>linear item 2</text>
        <text>linear item 3</text>
      </view>
      <view
        className="flex  box"
        style={{ justifyContent: "center", alignContent: "center" }}
      >
        <text>flex item 1</text>
        <text>flex item 2</text>
        <text>flex item 3</text>
        <text>flex item 4</text>
      </view>
      <view className="grid box">
        <text>grid item 1</text>
        <text
          className="grid-row-span"
          style={{ justifySelf: "center", alignSelf: "center" }}
        >
          grid item 2
        </text>
        <text>gird item 3</text>
      </view>
    </view>
  );
};

root.render(<AlignExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
