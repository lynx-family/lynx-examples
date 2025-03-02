import { root } from "@lynx-js/react";

import "./index.scss";

const LinearJustifyContentExample = () => {
  return (
    <>
      <text className="title_style">justify-content: start</text>
      <view className="container" style={{ justifyContent: "start" }}>
        <view className="item1"></view>
        <view className="item2"></view>
        <view className="item3"></view>
      </view>

      <text className="title_style">justify-content: end</text>
      <view className="container" style={{ justifyContent: "end" }}>
        <view className="item1"></view>
        <view className="item2"></view>
        <view className="item3"></view>
      </view>

      <text className="title_style">justify-content: center</text>
      <view className="container" style={{ justifyContent: "center" }}>
        <view className="item1"></view>
        <view className="item2"></view>
        <view className="item3"></view>
      </view>

      <text className="title_style">justify-content: space-between</text>
      <view className="container" style={{ justifyContent: "space-between" }}>
        <view className="item1"></view>
        <view className="item2"></view>
        <view className="item3"></view>
      </view>
    </>
  );
};

root.render(<LinearJustifyContentExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
