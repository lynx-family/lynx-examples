import { root, useState } from "@lynx-js/react";
import "./index.scss";

const MarginInlineEnd = () => {
  const [rtl, setRtl] = useState(false);

  const containerStyle = {
    direction: rtl ? "rtl" : "ltr" as "rtl" | "ltr",
  };

  const introStyle = {
    marginInlineStart: "10px",
    marginInlineEnd: "50px",
  };

  return (
    <>
      <view className="con" bindtap={() => setRtl(!rtl)} style={containerStyle}>
        <text className="intro" style={introStyle}>1</text>
        <text className="intro2">2</text>
      </view>
      <text>Click above to switch, current {rtl ? "rtl" : "ltr"}</text>
    </>
  );
};

root.render(<MarginInlineEnd />);
