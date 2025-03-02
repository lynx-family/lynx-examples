import { root } from "@lynx-js/react";

import "./index.scss";

const styles = [
  ["thick double red", "thin dotted blue"],
  ["10px solid orange", "medium solid #0000ff"],
  ["5px groove rgba(0,255,0,0.6)", "10rpx ridge hsl(89,43%,51%)"],
  ["thick outset hsla(89,43%,51%,0.3)", "16px inset #ab0"],
];

const GradientScrollView = () => {
  return (
    <scroll-view
      className="root"
      scroll-orientation="vertical"
      style={{ flexDirection: "column", width: "100%", height: "100%" }}
    >
      <view
        className="fixed_area"
        style={{ width: "100%", height: "100%", flexDirection: "column" }}
      >
        {styles.map((styleGroup, index) => (
          <view key={index} className="row">
            {styleGroup.map((item, idx) => (
              <view key={idx} className="box" style={{ border: item }}>
                <text className="text"></text>
              </view>
            ))}
          </view>
        ))}

        {styles.map((styleGroup, index) => (
          <view key={index} className="row">
            {styleGroup.map((item, idx) => (
              <view
                key={idx}
                className={`box radiusStyle${index}`}
                style={{ border: item }}
              >
                <text className="text"></text>
              </view>
            ))}
          </view>
        ))}
      </view>
    </scroll-view>
  );
};

root.render(<GradientScrollView />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
