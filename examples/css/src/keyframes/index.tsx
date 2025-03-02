import { root } from "@lynx-js/react";

import "./index.scss";
import LynxIcon from "../../resource/lynx.png";

const AnimationExamples = () => {
  const transProperties = ["translateX", "translateY", "translateZ"];
  const rotateProperties = ["rotateX", "rotateY", "rotateZ"];
  const scaleProperties = ["scaleX", "scaleY", "scaleXY"];
  const flipProperties = ["flipX", "flipY", "flipXY"];
  const otherProperties = ["background-color", "opacity"];

  return (
    <view style={{ width: "100%", height: "100%", flexDirection: "column" }}>
      <scroll-view scroll-orientation="vertical" className="fd-col container">
        {/* Keyframes Animation Title */}
        <text className="h1">keyframes animation</text>
        <view className="sep"></view>

        {/* Translate Animations */}
        <view className="fd-col group pd5">
          <text className="button h2">translate animation</text>
          <view className="fd-row" style={{ height: "200rpx" }}>
            {transProperties.map((item, index) => (
              <view
                key={index}
                style={{ width: "250rpx" }}
                className="fd-col mg5"
              >
                <text className="h3 mgl15">{item}</text>
                <image
                  style={{
                    animation: `${item}-ani 2s ease 0s infinite alternate both running`,
                    marginLeft: "15px",
                    marginTop: "30px",
                  }}
                  className="ani-size mg5 mgl15 mgt15"
                  src={LynxIcon}
                />
              </view>
            ))}
          </view>
        </view>
        <view className="sep"></view>

        {/* Rotate Animations */}
        <view className="fd-col group pd5">
          <text className="button h2">rotate animation</text>
          <view className="fd-row" style={{ height: "150rpx" }}>
            {rotateProperties.map((item, index) => (
              <view
                key={index}
                style={{ width: "250rpx" }}
                className="fd-col mg5"
              >
                <text className="h3 mgl15">{item}</text>
                <image
                  style={{
                    animation: `${item}-ani 2s ease 0s infinite alternate both running`,
                    marginLeft: "15px",
                    marginTop: "30px",
                  }}
                  className="ani-size mg5 mgl15 mgt15"
                  src={LynxIcon}
                />
              </view>
            ))}
          </view>
        </view>
        <view className="sep"></view>

        {/* Scale Animations */}
        <view className="fd-col group pd5">
          <text className="button h2">scale animation</text>
          <view className="fd-row" style={{ height: "200rpx" }}>
            {scaleProperties.map((item, index) => (
              <view
                key={index}
                style={{ width: "250rpx" }}
                className="fd-col mg5"
              >
                <text className="h3 mgl15">{item}</text>
                <image
                  style={{
                    animation: `${item}-ani 2s ease 0s infinite alternate both running`,
                    marginLeft: "15px",
                    marginTop: "30px",
                  }}
                  className="ani-size"
                  src={LynxIcon}
                />
              </view>
            ))}
          </view>
        </view>
        <view className="sep"></view>

        {/* Flip Animations */}
        <view className="fd-col group pd5">
          <text className="button h2">flip animation</text>
          <view className="fd-row" style={{ height: "200rpx" }}>
            {flipProperties.map((item, index) => (
              <view
                key={index}
                style={{ width: "250rpx" }}
                className="fd-col mg5"
              >
                <text className="h3 mgl15">{item}</text>
                <image
                  style={{
                    animation: `${item}-ani 2s ease 0s infinite alternate both running`,
                    marginLeft: "15px",
                    marginTop: "30px",
                  }}
                  className="ani-size mg5 mgl15 mgt15"
                  src={LynxIcon}
                />
              </view>
            ))}
          </view>
        </view>
        <view className="sep"></view>

        {/* Background color and opacity Animations */}
        <view className="fd-col group pd5">
          <text className="button h2">bg-color opacity</text>
          <view className="fd-row" style={{ height: "200rpx" }}>
            {otherProperties.map((item, index) => (
              <view
                key={index}
                style={{ width: "250rpx" }}
                className="fd-col mg5"
              >
                <text className="h3 mgl15">{item}</text>
                <view
                  style={{
                    animation: `${item}-ani 2s ease 0s infinite alternate both running`,
                    marginLeft: "15px",
                    marginTop: "15px",
                  }}
                  className="ani-size"
                />
              </view>
            ))}
          </view>
        </view>
        <view className="sep"></view>
      </scroll-view>
    </view>
  );
};

root.render(<AnimationExamples />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
