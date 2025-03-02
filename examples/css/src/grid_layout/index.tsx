import { root } from "@lynx-js/react";

import "./index.scss";
const GridComponent = () => {
  return (
    <view style={{ width: "100%", height: "100%", flexDirection: "column" }}>
      <text className="header__title colorWidth">Grid layout</text>
      <view className="container">
        <view className="item1"></view>
        <view className="item2"></view>
        <view className="item3"></view>
        <view className="item4"></view>
        <view className="item5"></view>
        <view className="item6"></view>
        <view className="item7"></view>
      </view>
    </view>
  );
};
root.render(<GridComponent />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
