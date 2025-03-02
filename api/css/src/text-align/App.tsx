import { root } from "@lynx-js/react";
import "./index.scss";

const TextAlign = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area">
        <view style={containerStyle}>
          <text className="item left">Filler Text</text>
          <text className="item center">Filler Text</text>
          <text className="item right">Filler Text</text>
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<TextAlign />);
