import { root } from "@lynx-js/react";
import "./index.scss";

const JustifyItems = () => {
  const getGridStyle = (justifyItems: string) => ({
    display: "grid" as const,
    gridTemplateColumns: "auto",
    justifyItems: justifyItems,
  });

  return (
    <>
      <text>justify-items:stretch</text>
      <view style={getGridStyle("stretch")}>
        <text className="item">Item</text>
        <text className="item">Item</text>
      </view>
      <text>justify-items:start</text>
      <view style={getGridStyle("start")}>
        <text className="item">Item</text>
        <text className="item">Item</text>
      </view>
      <text>justify-items:end</text>
      <view style={getGridStyle("end")}>
        <text className="item">Item</text>
        <text className="item">Item</text>
      </view>
      <text>justify-items:center</text>
      <view style={getGridStyle("center")}>
        <text className="item">Item</text>
        <text className="item">Item</text>
      </view>
    </>
  );
};

root.render(<JustifyItems />);
