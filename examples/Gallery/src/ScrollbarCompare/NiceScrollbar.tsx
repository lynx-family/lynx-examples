import "../index.scss";
import { forwardRef, useImperativeHandle, useState } from "@lynx-js/react";

export interface NiceScrollbarRef {
  adjustScrollbar: (scrollTop: number, scrollHeight: number) => void;
}

export const NiceScrollbar = forwardRef((_, ref) => {
  const [scrollbarHeight, setScrollbarHeight] = useState(0);
  const [scrollbarTop, setScrollbarTop] = useState(0);

  const adjustScrollbar = (scrollTop: number, scrollHeight: number) => {
    const listHeight = SystemInfo.pixelHeight / SystemInfo.pixelRatio;
    const scrollbarHeight = listHeight * (listHeight / scrollHeight);
    const scrollbarTop = listHeight * (scrollTop / scrollHeight);
    setScrollbarHeight(scrollbarHeight);
    setScrollbarTop(scrollbarTop);
  };

  useImperativeHandle(ref, () => ({ adjustScrollbar }), [adjustScrollbar]);

  return (
    <view
      className="scrollbar"
      style={{ right: "3px", height: `${scrollbarHeight}px`, top: `${scrollbarTop}px` }}
    >
      <view className="scrollbar-effect glow" />
    </view>
  );
});
