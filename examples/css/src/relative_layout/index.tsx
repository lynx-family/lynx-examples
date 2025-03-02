import { root } from "@lynx-js/react";

import "./index.scss";
const RelativeComponent = () => {
  return (
    <view style={{ width: "100%", height: "100%", flexDirection: "column" }}>
      <text className="header__title colorWidth">Relative layout</text>
      <view className="container">
        <text className="close">×</text>
        <text className="user_name">Lynx</text>
        <text className="user_description">16 mins ago</text>
        <image className="avatar"></image>
        <text className="user_lv">lv 999</text>
        <text className="follow">Follow</text>
      </view>
    </view>
  );
};
root.render(<RelativeComponent />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
