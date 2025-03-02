import { root } from "@lynx-js/react";

import "./index.scss";

const RelativeExample = () => {
  return (
    <view className="container">
      <view className="close"></view>
      <view className="user_name"></view>
      <view className="user_description"></view>
      <view className="avatar"></view>
      <view className="user_lv"></view>
      <view className="follow"></view>
    </view>
  );
};

root.render(<RelativeExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
