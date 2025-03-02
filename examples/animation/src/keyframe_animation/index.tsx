import { root } from "@lynx-js/react";

import "./index.scss";

const KeyframeAnimationExample = () => {
  return (
    <view style={{ width: "100%", height: "100%" }}>
      <text style={{ textAlign: "center", fontSize: "30px" }}>
        CSS Animation
      </text>
      <text style={{ fontSize: "20px" }}>transform</text>
      <view
        className="box"
        style={{ animation: "transform-ani 3s ease infinite alternate" }}
      >
      </view>
      <text
        style={{
          fontSize: "20px",
          animation: "text-color-ani 3s ease infinite alternate",
        }}
      >
        color-opacity
      </text>
      <view
        className="box"
        style={{ animation: "opa-color-ani 3s ease infinite alternate" }}
      >
      </view>
      <text style={{ fontSize: "20px" }}>layout</text>
      <view
        className="layout-box"
        style={{ animation: "layout 3s ease infinite alternate" }}
      >
      </view>
      <text style={{ fontSize: "20px" }}>border-margin-padding</text>
      <view
        className="border-margin-padding-box"
        style={{ animation: "b-m-p-ani 3s ease infinite alternate" }}
      >
      </view>
    </view>
  );
};
root.render(<KeyframeAnimationExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
