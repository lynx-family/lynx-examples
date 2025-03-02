import { root } from "@lynx-js/react";
import "./index.scss";

const TextOverflow = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  const sampleText = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

  return (
    <view style={containerStyle}>
      <text className="title">text-overflow: clip</text>
      <text className="item clip" text-maxline="2">
        {sampleText}
      </text>

      <text className="title">text-overflow: ellipsis</text>
      <text className="item overflow" text-maxline="2">
        {sampleText}
      </text>
    </view>
  );
};

root.render(<TextOverflow />);
