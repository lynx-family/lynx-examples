import { root } from "@lynx-js/react";

import "./index.scss";

const DirectionExample = () => {
  return (
    <view className="column">
      <view className="row logic-padding" style={{ direction: "ltr" }}>
        <view className="box">
          <text>1</text>
        </view>
        <view className="box">
          <text>2</text>
        </view>
        <view className="box">
          <text>3</text>
        </view>
      </view>
      <view className="row logic-padding" style={{ direction: "rtl" }}>
        <view className="box">
          <text>1</text>
        </view>
        <view className="box">
          <text>2</text>
        </view>
        <view className="box">
          <text>3</text>
        </view>
      </view>
    </view>
  );
};

root.render(<DirectionExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
