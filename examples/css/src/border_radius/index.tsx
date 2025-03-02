import { root } from "@lynx-js/react";

import "./index.scss";

const styles = [
  ["2em", "2em / 5em"],
  ["2em 1em 4em / 0.5em 3em", "15px 50px"],
  ["15px 50px 30px 5px", "1em 2em 4em 4em / 1em 2em 2em 8em"],
  ["100px 200px", "100px 30px / 10px"],
  ["100em / 200em", "2px 0px 2em / 0em 100px"],
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
          <view key={index}>
            <view className="row">
              {styleGroup.map((item, idx) => (
                <view
                  key={idx}
                  className={`box size0 styleDiff${idx} colorWidthSame`}
                  style={{ borderRadius: item }}
                >
                  <text className="text"></text>
                </view>
              ))}
            </view>
          </view>
        ))}

        {styles.map((styleGroup, index) => (
          <view key={index}>
            <view className="row">
              {styleGroup.map((item, idx) => (
                <view
                  key={idx}
                  className={`box size0 colorWidthDiff${idx}`}
                  style={{ borderRadius: item }}
                >
                  <text className="text"></text>
                </view>
              ))}
            </view>
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
