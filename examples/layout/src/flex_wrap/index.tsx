import { root } from "@lynx-js/react";

import "./index.scss";

const FlexWrapExample = () => {
  return (
    <>
      <text className="title">
        flex-direction: row;
      </text>
      <text className="title">
        flex-wrap: wrap;
      </text>
      <view className="container" style={{ flexWrap: "wrap" }}>
        <view className="item">
          <text className="text">Item 1</text>
        </view>
        <view className="item" style={{ backgroundColor: "rgb(0,235,235)" }}>
          <text className="text">Item 2</text>
        </view>
        <view className="item">
          <text className="text">Item 3</text>
        </view>
      </view>

      <text className="title">
        flex-direction: row;
      </text>
      <text className="title">
        flex-wrap: nowrap;
      </text>
      <view className="container" style={{ flexWrap: "nowrap" }}>
        <view className="item">
          <text className="text">Item 1</text>
        </view>
        <view className="item" style={{ backgroundColor: "rgb(0,235,235)" }}>
          <text className="text">Item 2</text>
        </view>
        <view className="item">
          <text className="text">Item 3</text>
        </view>
      </view>
    </>
  );
};

root.render(<FlexWrapExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
