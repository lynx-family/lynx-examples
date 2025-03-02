import { root, useState } from "@lynx-js/react";
import "./index.scss";

const LinearCrossGravity = () => {
  const [linearDirection, setLinearDirection] = useState(false);
  const container1Style = {
    linearDirection: linearDirection ? "row" : "column" as "row" | "column",
    linearCrossGravity: "none" as const,
  };
  const container2Style = {
    linearDirection: linearDirection ? "row" : "column" as "row" | "column",
    linearCrossGravity: "start" as const,
  };
  const container3Style = {
    linearDirection: linearDirection ? "row" : "column" as "row" | "column",
    linearCrossGravity: "end" as const,
  };
  const container4Style = {
    linearDirection: linearDirection ? "row" : "column" as "row" | "column",
    linearCrossGravity: "center" as const,
  };
  const container5Style = {
    linearDirection: linearDirection ? "row" : "column" as "row" | "column",
    linearCrossGravity: "stretch" as const,
  };
  const buttonStyle = {
    width: "20%",
    height: "50px",
    backgroundColor: "red" as const,
  };
  const text1Style = {
    fontSize: "40rpx" as const,
    marginRight: "12rpx",
    fontWeight: "900" as const,
    color: "linear-gradient(120deg ,#0095ff 30% ,#42d392 100%)" as const,
  };
  const text2Style = {
    fontSize: "50rpx" as const,
    alignSelf: "center" as const,
    fontWeight: "900" as const,
    color: "linear-gradient(120deg,#0095ff 30%,#42d392 100%)" as const,
  };
  const view1Style = {
    width: "20px",
    height: "20px",
    backgroundColor: "red" as const,
  };
  const view2Style = {
    width: "20px",
    height: "20px",
    backgroundColor: "yellow" as const,
  };
  const view3Style = {
    width: "20px",
    height: "20px",
    backgroundColor: "green" as const,
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view style={buttonStyle} bindtap={() => setLinearDirection(!linearDirection)}></view>
      <text style={text1Style}>Click above red button to switch linear-direction</text>
      <text style={text2Style}>Current: "{linearDirection ? "row" : "column"}"</text>
      <text className="title">linear-cross-gravity:none;(default)</text>
      <view className="linear_container" style={container1Style}>
        <view style={view1Style}></view>
        <view style={view2Style}></view>
        <view style={view3Style}></view>
      </view>
      <text className="title">linear-cross-gravity:start;</text>
      <view className="linear_container" style={container2Style}>
        <view style={view1Style}></view>
        <view style={view2Style}></view>
        <view style={view3Style}></view>
      </view>
      <text className="title">linear-cross-gravity:end;</text>
      <view className="linear_container" style={container3Style}>
        <view style={view1Style}></view>
        <view style={view2Style}></view>
        <view style={view3Style}></view>
      </view>
      <text className="title">linear-cross-gravity:center;</text>
      <view className="linear_container" style={container4Style}>
        <view style={view1Style}></view>
        <view style={view2Style}></view>
        <view style={view3Style}></view>
      </view>
      <text className="title">linear-cross-gravity:stretch;</text>
      <view className="linear_container" style={container5Style}>
        <view style={view1Style}></view>
        <view style={view2Style}></view>
        <view style={view3Style}></view>
      </view>
    </scroll-view>
  );
};

root.render(<LinearCrossGravity />);
