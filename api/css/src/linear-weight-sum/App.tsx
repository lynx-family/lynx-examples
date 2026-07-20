import { root } from "@lynx-js/react";
import "./index.scss";

const LinearWeightSum = () => {
  const containerStyle = {
    display: "linear" as const,
    linearDirection: "column" as const,
    height: "400px",
    linearWeightSum: "3",
    marginTop: "30px",
  };

  const textStyle = {
    fontSize: "40rpx" as const,
    alignSelf: "center" as const,
    fontWeight: "900" as const,
    color: "linear-gradient(120deg ,#0095ff 30% ,#42d392 100%)" as const,
  };

  const text2Style = {
    fontSize: "40rpx" as const,
    fontWeight: "800" as const,
  };

  const redBoxStyle = {
    width: "100%",
    alignItems: "center" as const,
    justifyContent: "center" as const,
    backgroundColor: "red",
    height: "100px",
  };

  const yellowBoxStyle = {
    width: "100%",
    alignItems: "center" as const,
    justifyContent: "center" as const,
    backgroundColor: "yellow",
    linearWeight: 2,
  };

  const greenBoxStyle = {
    width: "100%",
    alignItems: "center" as const,
    justifyContent: "center" as const,
    backgroundColor: "green",
    linearWeight: 1,
  };

  return (
    <>
      <text style={textStyle}>linear-weight-sum: 3</text>
      <text style={textStyle}>height: 400px</text>
      <view style={containerStyle}>
        <view style={redBoxStyle}>
          <text style={text2Style}>height: 100px</text>
        </view>
        <view style={yellowBoxStyle}>
          <text style={text2Style}>linear-weight: 2</text>
        </view>
        <view style={greenBoxStyle}>
          <text style={text2Style}>linear-weight: 1</text>
        </view>
      </view>
    </>
  );
};

root.render(<LinearWeightSum />);
