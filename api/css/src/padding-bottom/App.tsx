import { root } from "@lynx-js/react";
import "./index.scss";

const PaddingBottom = () => {
  const containerStyle = {
    paddingTop: "10px",
    paddingBottom: "30px",
  };

  return (
    <view className="con" style={containerStyle}>
      <text className="intro2">2</text>
    </view>
  );
};

root.render(<PaddingBottom />);
