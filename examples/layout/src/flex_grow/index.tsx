import { root } from "@lynx-js/react";

import "./index.scss";

const FlexGrowExample = () => {
  return (
    <scroll-view>
      <text className="title">
        flex-direction: column
      </text>
      <view className="container">
        <view className="item1">
          <text className="text">flex-grow: 1</text>
        </view>
        <view className="item2">
          <text className="text">flex-grow: 2</text>
        </view>
        <view className="item3">
          <text className="text">100px</text>
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<FlexGrowExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
