import { root, useState } from "@lynx-js/react";
import "./index.scss";

const InsetInlineEnd = () => {
  const [rtl, setRtl] = useState(false);

  const containerStyle = {
    direction: rtl ? "rtl" : "ltr" as "rtl" | "ltr",
  };

  const introStyle = {
    insetInlineStart: "20px",
    insetInlineEnd: "50px",
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

root.render(<InsetInlineEnd />);
