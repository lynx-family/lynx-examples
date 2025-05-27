import { root } from "@lynx-js/react";
import "./index.scss";

const WordBreak = () => {
  const normalBreakStyle = {
    overflow: "hidden",
    wordBreak: "normal",
  } as const;

  const breakAllStyle = {
    overflow: "hidden",
    wordBreak: "break-all",
  } as const;

  return (
    <view className="container">
      <text text-maxline="1" style={normalBreakStyle}>
        Hello, Lynx!Hello, Lynx!Hello, Lynx!
      </text>
      <text text-maxline="1" style={breakAllStyle}>
        Hello, Lynx!Hello, Lynx!Hello, Lynx!
      </text>
    </view>
  );
};

root.render(<WordBreak />);
