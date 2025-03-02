import { root, useState } from "@lynx-js/react";
import "./index.scss";

const Perspective = () => {
  const [front, setFront] = useState(false);
  const [enableAni, setEnableAni] = useState(false);

  const handleKeyframe = () => {
    setFront(!front);
  };

  const handleAni = () => {
    setEnableAni(!enableAni);
  };

  const containerStyle = {
    display: "flex" as const,
    flexDirection: "column" as const,
    width: "100%",
    height: "1000px",
    background: "white",
  };

  const perspectiveStyle = {
    perspective: "750px",
  };

  return (
    <view style={containerStyle}>
      <text>Animation demo</text>

      <view className={front ? "container front" : "container back"} style={perspectiveStyle} bindtap={handleKeyframe}>
        <text>Front</text>
      </view>
      <view
        className={front ? "container1 back" : "container1 front"}
        style={perspectiveStyle}
        bindtap={handleKeyframe}
      >
        <view className="container2" />
        <text>Back</text>
      </view>
      <view className="anim-container">
        <view
          className={enableAni ? "anim-content anim-content-back backf0" : "anim-content anim-content-back backf1"}
          style={perspectiveStyle}
          bindtap={handleAni}
        >
          <text>Front</text>
          <text>Back</text>
        </view>
        <view
          className={enableAni ? "anim-content anim-content-front keyf0" : "anim-content anim-content-front keyf1"}
          style={perspectiveStyle}
          bindtap={handleAni}
        >
          <text>back</text>
        </view>
      </view>
    </view>
  );
};

root.render(<Perspective />);
