import { root } from "@lynx-js/react";

import "./index.scss";

const FlexShrinkExample = () => {
  return (
    <>
      <text className="title">
        flex-direction: column
      </text>
      <view className="container">
        <view className="item1">
          <text className="text">flex-shrink: 0</text>
          <text className="text">height 300px</text>
        </view>
        <view className="item2">
          <text className="text">flex-shrink: 1</text>
          <text className="text">height shrinks from 300px to fit container</text>
        </view>
      </view>
    </>
  );
};

root.render(<FlexShrinkExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
