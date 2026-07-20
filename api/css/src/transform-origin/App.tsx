import { root } from "@lynx-js/react";
import "./index.scss";

const TransformOrigin = () => {
  const emptyBoxStyle = {
    position: "absolute",
    width: "100px",
    height: "100px",
    border: "1px solid black",
  } as const;

  const redBoxStyle = {
    position: "absolute",
    width: "100px",
    height: "100px",
    backgroundColor: "red",
    transform: "rotate(45rad)",
  } as const;

  const greenBoxStyle = {
    position: "absolute",
    width: "100px",
    height: "100px",
    backgroundColor: "green",
    transformOrigin: "50% top",
    transform: "rotate(45rad)",
  } as const;

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="intro">
        <view style={redBoxStyle} />
        <view style={emptyBoxStyle} />
      </view>
      <view className="intro">
        <view style={greenBoxStyle} />
        <view style={emptyBoxStyle} />
      </view>
    </scroll-view>
  );
};

root.render(<TransformOrigin />);
