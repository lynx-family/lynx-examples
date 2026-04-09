import { root } from "@lynx-js/react";
import "./index.scss";

const cursorPresets = [
  "default",
  "pointer",
  "text",
  "grab",
  "grabbing",
  "not-allowed",
] as const;

const Cursor = () => {
  return (
    <view className="page">
      <view className="panel">
        <text className="eyebrow">CSS cursor</text>
        <text className="title">Hover the buttons to preview cursor keywords.</text>
        <text className="subtitle">
          Each button applies its own cursor value.
        </text>

        <view className="buttons">
          {cursorPresets.map(cursor => (
            <view
              key={cursor}
              className="button"
              style={{ cursor }}
            >
              <text className="buttonText">{cursor}</text>
            </view>
          ))}
        </view>
      </view>
    </view>
  );
};

root.render(<Cursor />);
