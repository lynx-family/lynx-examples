import { root, useState } from "@lynx-js/react";
import "./index.scss";

const LinearWeight = () => {
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
    width: "30px",
    height: "30px",
    linearWeight: "0.5" as const,
    backgroundColor: "red" as const,
  };
  const Container1View2Style = {
    width: "30px",
    height: "30px",
    linearWeight: "2" as const,
    backgroundColor: "yellow" as const,
  };
  const Container1View3Style = {
    width: "30px",
    height: "30px",
    linearWeight: "0.5" as const,
    backgroundColor: "blue" as const,
  };

  const Container2View1Style = {
    width: "30px",
    height: "30px",
    linearWeight: "1" as const,
    backgroundColor: "red" as const,
  };
  const Container2View2Style = {
    width: "30px",
    height: "30px",
    linearWeight: "1" as const,
    backgroundColor: "yellow" as const,
  };
  const Container2View3Style = {
    width: "30px",
    height: "30px",
    linearWeight: "1" as const,
    backgroundColor: "blue" as const,
  };

  const Container3View1Style = {
    width: "30px",
    height: "30px",
    linearWeight: "0.5" as const,
    backgroundColor: "red" as const,
  };
  const Container3View2Style = {
    width: "30px",
    height: "30px",
    linearWeight: "0.5" as const,
    backgroundColor: "yellow" as const,
  };
  const Container3View3Style = {
    width: "30px",
    height: "30px",
    linearWeight: "2" as const,
    backgroundColor: "blue" as const,
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view style={buttonStyle} bindtap={() => setLinearDirection(!linearDirection)}></view>
      <text style={text1Style}>Click above red button to switch linear-direction</text>
      <text style={text2Style}>Current: "{linearDirection ? "row" : "column"}"</text>
      <text className="title">linear-weight: 0.5 2 0.5</text>
      <view className="linear_container" style={containerStyle}>
        <view style={Container1View1Style} />
        <view style={Container1View2Style} />
        <view style={Container1View3Style} />
      </view>

      <text className="title">linear-weight: 1 1 1</text>
      <view className="linear_container" style={containerStyle}>
        <view style={Container2View1Style} />
        <view style={Container2View2Style} />
        <view style={Container2View3Style} />
      </view>

      <text className="title">linear-weight: 0.5 0.5 2</text>
      <view className="linear_container" style={containerStyle}>
        <view style={Container3View1Style} />
        <view style={Container3View2Style} />
        <view style={Container3View3Style} />
      </view>
    </scroll-view>
  );
};

root.render(<LinearWeight />);
