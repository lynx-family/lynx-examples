import { root } from "@lynx-js/react";

import "./index.scss";

const GradientScrollView = () => {
  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area">
        <view className="container">
          <view
            style={{
              width: "50%",
              backgroundImage: "linear-gradient(red, yellow)",
            }}
          >
          </view>
        </view>

        <view className="container">
          <view
            style={{
              width: "50%",
              backgroundImage: "linear-gradient(green 40%, yellow 30%, blue 70%)",
            }}
          />
          <view
            style={{
              width: "50%",
              backgroundImage: "linear-gradient(green 40%, yellow 40%, blue 70%)",
            }}
          />
        </view>

        <view className="container">
          <view
            style={{
              width: "50%",
              backgroundImage: "radial-gradient(red, green)",
            }}
          />
          <view
            style={{
              width: "50%",
              backgroundImage: "radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%)",
            }}
          />
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<GradientScrollView />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
