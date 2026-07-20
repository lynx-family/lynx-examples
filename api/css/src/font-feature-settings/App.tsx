import { root } from "@lynx-js/react";
import "./index.scss";

const FontFeatureSettings = () => {
  return (
    <view style={{ display: "linear" }}>
      <text>normal</text>
      <text className="variable-font-normal">1234567890</text>
      <text>font-feature-settings:'onum'</text>
      <text className="variable-font-normal font-feature-settings">1234567890</text>
    </view>
  );
};

root.render(<FontFeatureSettings />);
