import { root } from "@lynx-js/react";
import "./index.scss";

const Ppx = () => {
  const container0Style = {
    backgroundOrigin: "content-box" as const,
    backgroundRepeat: "no-repeat" as const,
    backgroundSize: "100ppx 100ppx",
    backgroundPosition: "30ppx 40ppx",
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area">
        <view className="container0 image1" style={container0Style}>
        </view>
        <view className="container1">
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<Ppx />);
