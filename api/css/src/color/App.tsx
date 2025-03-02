import { root } from "@lynx-js/react";
import "./index.scss";

const Color = () => {
  const scrollViewStyle = {
    height: "100%",
  };

  const fixedAreaStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical" style={scrollViewStyle}>
      <view className="fixed_area" style={fixedAreaStyle}>
        <text className="container text2 font_style">Hello World</text>
        <text className="container text3 font_style">Hello World</text>
        <text className="container text4 font_style">Hello World</text>
        <text className="container text5 font_style">Hello World</text>
        <text className="container text6 font_style">Hello World</text>
        <text className="container text7 font_style">Hello World</text>
        <text className="container text8 font_style">Hello World</text>
        <text className="container text9 font_style">Hello 😄 😄 World</text>
      </view>
    </scroll-view>
  );
};

root.render(<Color />);
