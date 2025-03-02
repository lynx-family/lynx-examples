import { root } from "@lynx-js/react";

import "./index.scss";

const GridGap = () => {
  return (
    <>
      <text className="title">gap: 20px;</text>
      <view className="container" style={{ gap: "20px" }}>
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

      <text className="title">column-gap: 20px;</text>
      <view className="container" style={{ columnGap: "20px" }}>
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

      <text className="title">row-gap: 20px;</text>
      <view className="container" style={{ rowGap: "20px" }}>
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

root.render(<GridGap />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
