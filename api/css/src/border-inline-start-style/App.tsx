import { root, useState } from "@lynx-js/react";
import "./index.scss";

const BorderInlineStartStyle = () => {
  const [rtl, setRtl] = useState(false);

  const containerStyle = {
    direction: rtl ? "rtl" : "ltr" as "rtl" | "ltr",
  };

  const textStyle = {
    borderInlineStartStyle: "dashed",
    borderInlineEndStyle: "solid",
  };

  return (
    <>
      <view className="con" bindtap={() => setRtl(!rtl)} style={containerStyle}>
        <text className="intro" style={textStyle}>1</text>
      </view>
      <text>Click above to switch, current {rtl ? "rtl" : "ltr"}</text>
    </>
  );
};

root.render(<BorderInlineStartStyle />);
