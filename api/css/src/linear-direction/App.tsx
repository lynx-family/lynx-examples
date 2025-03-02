import { root } from "@lynx-js/react";
import "./index.scss";

const LinearDirection = () => {
  const verticalContainerStyle = {
    display: "linear" as const,
    alignSelf: "center" as const,
    justifyContent: "center" as const,
    linearDirection: "column" as const,
  };

  const horizontalContainerStyle = {
    display: "linear" as const,
    alignSelf: "center" as const,
    justifyContent: "center" as const,
    linearDirection: "row" as const,
  };

  const redBoxStyle = {
    width: "70px",
    height: "70px",
    backgroundColor: "red",
  };

  const yellowBoxStyle = {
    width: "70px",
    height: "70px",
    backgroundColor: "yellow",
  };

  const greenBoxStyle = {
    width: "70px",
    height: "70px",
    backgroundColor: "green",
  };

  const textStyle = {
    fontSize: "50rpx" as const,
    alignSelf: "center" as const,
    fontWeight: "900" as const,
    color: "linear-gradient(120deg,#0095ff 30%,#42d392 100%)" as const,
  };

  return (
    <>
      <text style={textStyle}>linear-direction: column</text>
      <view style={verticalContainerStyle}>
        <view style={redBoxStyle} />
        <view style={yellowBoxStyle} />
        <view style={greenBoxStyle} />
      </view>
      <view style={{ height: "50px" }} />
      <text style={textStyle}>linear-direction: row</text>
      <view style={horizontalContainerStyle}>
        <view style={redBoxStyle} />
        <view style={yellowBoxStyle} />
        <view style={greenBoxStyle} />
      </view>
    </>
  );
};

root.render(<LinearDirection />);
