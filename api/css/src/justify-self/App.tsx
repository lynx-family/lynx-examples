import { root } from "@lynx-js/react";
import "./index.scss";

const JustifySelf = () => {
  const containerStyle = {
    display: "grid" as const,
    gridTemplateColumns: "auto",
  };

  const getJustifySelfStyle = (justify: string) => ({
    justifySelf: justify,
  });

  return (
    <view style={containerStyle}>
      <text className="item" style={getJustifySelfStyle("stretch")}>justify-self:stretch</text>
      <text className="item" style={getJustifySelfStyle("center")}>justify-self:center</text>
      <text className="item" style={getJustifySelfStyle("start")}>justify-self:start</text>
      <text className="item" style={getJustifySelfStyle("end")}>justify-self:end</text>
    </view>
  );
};

root.render(<JustifySelf />);
