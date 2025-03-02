import { root } from "@lynx-js/react";

import "./index.scss";

const GridAxisAlignment = () => {
  return (
    <>
      <text className="title">justify-content: center;</text>
      <text className="title">align-content: start;</text>
      <view className="container" style={{ justifyContent: "center", alignContent: "start" }}>
        <view className="item">
          <text className="text">ONE</text>
        </view>
        <view className="item">
          <text className="text">TWO</text>
        </view>
        <view className="item">
          <text className="text">THREE</text>
        </view>
        <view className="item">
          <text className="text">FOUR</text>
        </view>
        <view className="item">
          <text className="text">FIVE</text>
        </view>
      </view>

      <text className="title">justify-content: end;</text>
      <text className="title">align-content: center;</text>
      <view className="container" style={{ justifyContent: "end", alignContent: "center" }}>
        <view className="item">
          <text className="text">ONE</text>
        </view>
        <view className="item">
          <text className="text">TWO</text>
        </view>
        <view className="item">
          <text className="text">THREE</text>
        </view>
        <view className="item">
          <text className="text">FOUR</text>
        </view>
        <view className="item">
          <text className="text">FIVE</text>
        </view>
      </view>
    </>
  );
};

root.render(<GridAxisAlignment />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
