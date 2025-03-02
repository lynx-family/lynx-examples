import { root } from "@lynx-js/react";

import "./index.scss";

const GradientScrollView = () => {
  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area">
        <view className="container radial-gradient-1"></view>
        <view className="container radial-gradient-2"></view>
        <view className="container radial-gradient-3"></view>
        <view className="container radial-gradient-4"></view>
        <view className="container radial-gradient-5"></view>
        <view className="container radial-gradient-6"></view>
        <view className="container radial-gradient-7"></view>
      </view>
    </scroll-view>
  );
};

root.render(<GradientScrollView />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
