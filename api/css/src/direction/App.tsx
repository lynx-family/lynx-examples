import { root, useState } from "@lynx-js/react";
import "./index.scss";

const Direction = () => {
  const [rtl, setRtl] = useState(false);

  const containerStyle = {
    direction: rtl ? "rtl" : "ltr" as "rtl" | "ltr",
  };

  return (
    <>
      <view className="con" bindtap={() => setRtl(!rtl)} style={containerStyle}>
        <text className="intro">rtl|ltr</text>
      </view>
      <text>current: {rtl ? "rtl" : "ltr"}</text>
    </>
  );
};

root.render(<Direction />);
