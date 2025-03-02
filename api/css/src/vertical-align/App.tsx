import { root } from "@lynx-js/react";
import "./index.scss";
import playImage from "../../resource/play.jpeg";

const VerticalAlign = () => {
  const containerStyle = {
    display: "linear" as const,
  };

  const titleStyle = {
    backgroundColor: "white",
  };

  const orangeContainerStyle = {
    lineHeight: "100px",
    backgroundColor: "orange",
  };

  const tomatoContainerStyle = {
    lineHeight: "100px",
    backgroundColor: "tomato",
  };

  const titleTextStyle = {
    fontSize: "25px",
  };

  const imageStyle = (align: string) => ({
    width: "20px",
    height: "20px",
    verticalAlign: align,
  });

  const textStyle = (align: string) => ({
    verticalAlign: align,
  });

  const viewStyle = (align: string) => ({
    width: "20px",
    height: "20px",
    backgroundColor: "yellow",
    verticalAlign: align,
  });

  return (
    <view className="intro" style={containerStyle} lynx-test-tag="container">
      <text style={titleStyle}>
        set vertical-align: middle,center,top,bottom,text-top,text-bottom,super,baseline,sub
      </text>
      <text style={orangeContainerStyle}>
        <text style={titleTextStyle}>inline-image:</text>

        <image src={playImage} style={imageStyle("middle")}></image>
        <image src={playImage} style={imageStyle("center")}></image>
        <image src={playImage} style={imageStyle("top")}></image>
        <image src={playImage} style={imageStyle("bottom")}></image>
        <image src={playImage} style={imageStyle("text-top")}></image>
        <image src={playImage} style={imageStyle("text-bottom")}></image>
        <image src={playImage} style={imageStyle("super")}></image>
        <image src={playImage} style={imageStyle("baseline")}></image>
        <image src={playImage} style={imageStyle("sub")}></image>
      </text>
      <text style={tomatoContainerStyle}>
        <text style={titleTextStyle}>inline-text:</text>
        <text style={textStyle("middle")}>xx</text>
        <text style={textStyle("center")}>xx</text>
        <text style={textStyle("top")}>xx</text>
        <text style={textStyle("bottom")}>xx</text>
        <text style={textStyle("text-top")}>xx</text>
        <text style={textStyle("text-bottom")}>xx</text>
        <text style={textStyle("super")}>xx</text>
        <text style={textStyle("baseline")}>xx</text>
        <text style={textStyle("sub")}>xx</text>
      </text>
      <text style={orangeContainerStyle}>
        <text style={titleTextStyle}>inline-view</text>
        <view style={viewStyle("middle")}></view>
        <view style={viewStyle("center")}></view>
        <view style={viewStyle("top")}></view>
        <view style={viewStyle("bottom")}></view>
        <view style={viewStyle("text-top")}></view>
        <view style={viewStyle("text-bottom")}></view>
        <view style={viewStyle("super")}></view>
        <view style={viewStyle("baseline")}></view>
        <view style={viewStyle("sub")}></view>
      </text>
    </view>
  );
};

root.render(<VerticalAlign />);
