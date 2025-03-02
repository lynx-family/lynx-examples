import { root, useState } from "@lynx-js/react";
import "./index.scss";

const ZIndex = () => {
  const [indices, setIndices] = useState([2, 1, 0, -1, -2]);
  const [show, setShow] = useState(false);

  const containerStyle = {
    zIndex: 0,
    height: "280px",
  };

  const innerContainerStyle = {
    height: "100%",
  };

  const getBlockStyle = (index: number, color: string, top: string, left: string) => ({
    zIndex: indices[index],
    background: color,
    position: "absolute" as const,
    top,
    left,
  });

  const getTextStyle = (show: boolean) => ({
    top: show ? "0" : "80px",
  });

  const handleChange = () => {
    setIndices(show ? [2, 1, 0, -1, -2] : [-2, -1, 0, 1, 2]);
    setShow(!show);
  };

  return (
    <view className="main" bindtap={handleChange}>
      <view className="container" style={containerStyle}>
        <view className="container" style={innerContainerStyle}>
          <view className="block" style={getBlockStyle(0, "#2196F3", "10px", "10px")}>
            <text className="text" style={getTextStyle(show)}>z-index:{indices[0]}</text>
          </view>
          <view className="block" style={getBlockStyle(1, "#4CAF50", "50px", "50px")}>
            <text className="text" style={getTextStyle(show)}>z-index:{indices[1]}</text>
          </view>
          <view className="block" style={getBlockStyle(2, "#9C27B0", "90px", "90px")}>
            <text className="text" style={getTextStyle(show)}>z-index:{indices[2]}</text>
          </view>
          <view className="block" style={getBlockStyle(3, "#FF9800", "130px", "130px")}>
            <text className="text" style={getTextStyle(show)}>z-index:{indices[3]}</text>
          </view>
          <view className="block" style={getBlockStyle(4, "#E91E63", "170px", "170px")}>
            <text className="text" style={getTextStyle(show)}>z-index:{indices[4]}</text>
          </view>
        </view>
      </view>
    </view>
  );
};

root.render(<ZIndex />);
