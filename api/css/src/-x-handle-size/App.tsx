import { root } from "@lynx-js/react";
import "./index.scss";

const XHandleSize = () => {
  return (
    <view className="container">
      <text className="text1" text-selection={true} flatten={false}>This is a text</text>
      <text className="text2" text-selection={true} flatten={false}>This is a text</text>
    </view>
  );
};

root.render(<XHandleSize />);
