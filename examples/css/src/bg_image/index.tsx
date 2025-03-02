import { root } from "@lynx-js/react";

import "./index.scss";

const GradientScrollView = () => {
  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area">
        <view
          className="container image1"
          style={{
            backgroundOrigin: "content-box",
            backgroundPosition: "left top",
            backgroundRepeat: "no-repeat",
          }}
        >
        </view>

        <view
          className="container image1"
          style={{
            backgroundOrigin: "padding-box",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "repeat-x",
          }}
        >
        </view>

        <view
          className="container image1"
          style={{
            backgroundOrigin: "border-box",
            backgroundPosition: "30px 40px",
            backgroundRepeat: "repeat",
          }}
        >
        </view>

        <view
          className="container image2"
          style={{
            backgroundOrigin: "content-box, border-box",
            backgroundPosition: "50% 40px, right bottom",
            backgroundRepeat: "repeat-y, repeat-x",
          }}
        >
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<GradientScrollView />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
