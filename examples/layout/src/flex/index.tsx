import { root } from "@lynx-js/react";

import "./index.scss";

const FlexExample = () => {
  return (
    <view>
      <view className="flex">
        <text className="item">item</text>
        <text className="item" style={{ flexGrow: 1 }}>
          grow to fill
        </text>
      </view>
      <view className="flex">
        <text className="item" style={{ flexShrink: 0, width: "75%" }}>
          large item
        </text>
        <text className="item" style={{ flexShrink: 1 }}>
          shrink to fit
        </text>
      </view>
    </view>
  );
};

root.render(<FlexExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
