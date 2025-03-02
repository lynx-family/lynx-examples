import { root, useState } from "@lynx-js/react";
import "./index.scss";

const MarginInlineStart = () => {
  const [rtl, setRtl] = useState(false);

  const containerStyle = {
    direction: rtl ? "rtl" : "ltr" as "rtl" | "ltr",
  };

  const introStyle = {
    marginInlineStart: "50px",
    marginInlineEnd: "10px",
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

root.render(<MarginInlineStart />);
