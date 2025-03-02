import { root } from "@lynx-js/react";
import "./index.scss";

const Overflow = () => {
  const containerStyle = {
    height: "500px",
    flexDirection: "column" as const,
    justifyContent: "space-around" as const,
  };

  const firstBoxStyle = {
    overflowX: "visible",
    overflowY: "hidden",
  };

  const secondBoxStyle = {
    overflow: "hidden",
  };

  const thirdBoxStyle = {
    overflowX: "hidden",
    overflowY: "visible",
  };

  const fourthBoxStyle = {
    overflow: "hidden",
  };

  const fifthBoxStyle = {
    overflow: "visible",
  };

  return (
    <view style={containerStyle}>
      <view className="outer-box" style={firstBoxStyle}>
        <view className="inner-box"></view>
      </view>

      <view className="outer-box" style={secondBoxStyle}>
        <view className="inner-box"></view>
      </view>

      <view className="outer-box" style={thirdBoxStyle}>
        <view className="inner-box"></view>
      </view>

      <view className="outer-box" style={fourthBoxStyle}>
        <view className="inner-box"></view>
      </view>

      <view className="outer-box" style={fifthBoxStyle}>
        <view className="inner-box"></view>
      </view>
    </view>
  );
};

root.render(<Overflow />);
