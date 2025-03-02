import { root } from "@lynx-js/react";
import "./index.scss";

const BackgroundColor = () => {
  const fixedAreaStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area" style={fixedAreaStyle}>
        <text className="container text1"></text>
        <text className="container text2"></text>
        <text className="container text3"></text>
        <text className="container text4"></text>
        <text className="container text5"></text>
        <text className="container text6"></text>
        <text className="container text7"></text>
        <text className="container text8"></text>
        <text className="container text9"></text>
      </view>
    </scroll-view>
  );
};

root.render(<BackgroundColor />);
