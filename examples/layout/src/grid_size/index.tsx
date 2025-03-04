import { root } from "@lynx-js/react";

import "./index.scss";

const GridSize = () => {
  return (
    <scroll-view>
      <text className="title">grid-template-columns: 1fr 100px;</text>
      <text className="title">grid-template-rows: repeat(3, 1fr);</text>
      <view className="container">
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
    </scroll-view>
  );
};

root.render(<GridSize />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
