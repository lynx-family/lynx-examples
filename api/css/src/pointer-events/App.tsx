import { root, useState } from "@lynx-js/react";
import type { TouchEvent } from "@lynx-js/types";
import "./index.scss";

const PointerEvents = () => {
  const [bgColor, setBgColor] = useState("white");
  const [isShow, setIsShow] = useState(false);

  function handleControlTap(e: TouchEvent) {
    "background-only";
    setIsShow(isShow => !isShow);
  }

  function handleContentTap(e: TouchEvent) {
    "background-only";
    const rndCol = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${
      Math.floor(Math.random() * 256)
    })`;
    setBgColor(rndCol);
  }

  return (
    <view className="container">
      <view className="control" bindtap={handleControlTap}>
        <text style={{ fontSize: "18px" }}>show or close popup</text>
      </view>
      {isShow
        && (
          <view className="popup" style={{ pointerEvents: "none" }}>
            <view className="mask">
              <view
                className="content"
                style={{ backgroundColor: bgColor, pointerEvents: "auto" }}
                bindtap={handleContentTap}
              />
            </view>
          </view>
        )}
    </view>
  );
};

root.render(<PointerEvents />);
