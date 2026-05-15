import { root } from "@lynx-js/react";

import "./index.scss";

const samples = [
  "Short title",
  "A medium title that wraps into two lines",
  "A very long title that wraps into three lines and uses the last line range rule",
];

const XAutoFontSizeLineRanges = () => {
  return (
    <view className="page">
      {samples.map((sample) => (
        <view key={sample} className="card">
          <text className="title" text-maxline="3">
            {sample}
          </text>
        </view>
      ))}
    </view>
  );
};

root.render(<XAutoFontSizeLineRanges />);
