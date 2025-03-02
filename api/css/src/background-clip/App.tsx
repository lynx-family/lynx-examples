import { root } from "@lynx-js/react";
import "./index.scss";

const BackgroundClip = () => {
  const scrollViewStyle = {
    flexDirection: "column" as const,
    height: "2000px",
  };

  const fixedAreaStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical" style={scrollViewStyle}>
      <view className="fixed_area" style={fixedAreaStyle}>
        <text className="shared border-box"></text>
        <text className="shared padding-box"></text>
        <text className="shared content-box"></text>
        <text className="shared border-box radius"></text>
        <text className="shared padding-box radius"></text>
        <text className="shared content-box radius"></text>
        <text className="shared border-box radius2"></text>
        <text className="shared padding-box radius2"></text>
        <text className="shared content-box radius2"></text>
        <view className="container"></view>
      </view>
    </scroll-view>
  );
};

root.render(<BackgroundClip />);
