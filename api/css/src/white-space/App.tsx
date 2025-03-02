import { root } from "@lynx-js/react";
import "./index.scss";

const WhiteSpace = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  const normalTextStyle = {
    className: "item normal",
  };

  const nowrapTextStyle = {
    className: "item nowrap",
  };

  const sampleText =
    "But ere she from the church-door stepped She smiled and told us why: 'It was a wicked woman's curse,' Quoth she, 'and what care I?' She smiled, and smiled, and passed it off Ere from the door she stept—";

  return (
    <view style={containerStyle}>
      <text className="title">white-space: normal</text>
      <text className="item normal">
        {sampleText}
      </text>

      <text className="title">white-space: nowrap</text>
      <text className="item nowrap">
        {sampleText}
      </text>
    </view>
  );
};

root.render(<WhiteSpace />);
