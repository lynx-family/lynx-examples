import { root } from "@lynx-js/react";

import "./index.scss";

const LinearExample = () => {
  return (
    <view className="column">
      <text className="item">column item 1</text>
      <text className="item">column item 2</text>
      <text className="item">column item 3</text>
      <view className="row">
        <text className="item">row item 1</text>
        <text className="item">row item 2</text>
        <text className="item">row item 3</text>
      </view>
    </view>
  );
};

root.render(<LinearExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
