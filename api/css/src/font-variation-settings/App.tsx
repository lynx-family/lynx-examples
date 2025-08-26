import { root } from "@lynx-js/react";
import "./index.scss";

const FontVariationSettings = () => {
  return (
    <view style={{ display: "linear" }}>
      <text>normal</text>
      <text className="variable-font-normal">1234567890</text>
      <text>font-variation-settings:'wght' 750</text>
      <text className="variable-font-normal font-variation-settings">1234567890</text>
    </view>
  );
};

root.render(<FontVariationSettings />);
