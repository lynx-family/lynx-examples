import { root, useState } from "@lynx-js/react";
import "./index.scss";

const LinearLayoutGravity = () => {
  const [linearDirection, setLinearDirection] = useState(false);
  const containerStyle = {
    linearDirection: linearDirection ? "row" : "column" as "row" | "column",
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
  const Container1View1Style = {
    width: "20px",
    height: "20px",
    linearLayoutGravity: "none" as const,
    backgroundColor: "red" as const,
  };
  const Container2View1Style = {
    width: "20px",
    height: "20px",
    linearLayoutGravity: "start" as const,
    backgroundColor: "red" as const,
  };
  const Container3View1Style = {
    width: "20px",
    height: "20px",
    backgroundColor: "red" as const,
    linearLayoutGravity: "end" as const,
  };
  const Container4View1Style = {
    width: "20px",
    height: "20px",
    backgroundColor: "red" as const,
    linearLayoutGravity: "center" as const,
  };
  const Container5View1Style = {
    width: "20px",
    height: "20px",
    backgroundColor: "red" as const,
    linearLayoutGravity: "stretch" as const,
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
      <text className="title">linear-layout-gravity:none;(default)</text>
      <view className="linear_container" style={containerStyle}>
        <view style={Container1View1Style}></view>
        <view style={view2Style}></view>
        <view style={view3Style}></view>
      </view>
      <text className="title">linear-layout-gravity:start;</text>
      <view className="linear_container" style={containerStyle}>
        <view style={Container2View1Style}></view>
        <view style={view2Style}></view>
        <view style={view3Style}></view>
      </view>
      <text className="title">linear-layout-gravity:end;</text>
      <view className="linear_container" style={containerStyle}>
        <view style={Container3View1Style}></view>
        <view style={view2Style}></view>
        <view style={view3Style}></view>
      </view>
      <text className="title">linear-layout-gravity:center;</text>
      <view className="linear_container" style={containerStyle}>
        <view style={Container4View1Style}></view>
        <view style={view2Style}></view>
        <view style={view3Style}></view>
      </view>
      <text className="title">linear-layout-gravity:stretch;</text>
      <view className="linear_container" style={containerStyle}>
        <view style={Container5View1Style}></view>
        <view style={view2Style}></view>
        <view style={view3Style}></view>
      </view>
    </scroll-view>
  );
};

root.render(<LinearLayoutGravity />);
