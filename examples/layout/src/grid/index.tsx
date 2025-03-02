import { root } from "@lynx-js/react";

import "./index.scss";

const GridExample = () => {
  return (
    <view className="container">
      <view className="item1"></view>
      <view className="item2"></view>
      <view className="item3"></view>
      <view className="item4"></view>
      <view className="item5"></view>
    </view>
  );
};

root.render(<GridExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
