import { root } from "@lynx-js/react";

import "./index.scss";

const PositionExample = () => {
  return (
    <view className="column">
      <view className="row">
        <view className="box">
          <text>1</text>
        </view>
        <view className="box" style={{ bottom: "20px", right: "10px" }}>
          <text>2</text>
        </view>
        <view className="box">
          <text>3</text>
        </view>
      </view>
      <view className="row">
        <view className="box">
          <text>1</text>
        </view>
        <view
          className="box"
          style={{
            position: "absolute",
            top: "20px",
            left: "10px",
          }}
        >
          <text>ABS</text>
        </view>
        <view className="box">
          <text>3</text>
        </view>
      </view>
      <view className="row">
        <view className="box">
          <text>1</text>
        </view>
        <view
          className="box"
          style={{ position: "fixed", top: "50px", left: "50px" }}
        >
          <text>FIXED</text>
        </view>
        <view className="box">
          <text>3</text>
        </view>
      </view>
    </view>
  );
};

root.render(<PositionExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
