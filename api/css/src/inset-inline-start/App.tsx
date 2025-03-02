import { root, useState } from "@lynx-js/react";
import "./index.scss";

const InsetInlineStart = () => {
  const [rtl, setRtl] = useState(false);

  const containerStyle = {
    direction: rtl ? "rtl" : "ltr" as "rtl" | "ltr",
  };

  const introStyle = {
    insetInlineStart: "50px",
    insetInlineEnd: "20px",
  };

  return (
    <>
      <view className="con" bindtap={() => setRtl(!rtl)} style={containerStyle}>
        <view className="intro" style={introStyle}></view>
      </view>
      <text>Click above to switch, current {rtl ? "rtl" : "ltr"}</text>
    </>
  );
};

root.render(<InsetInlineStart />);
