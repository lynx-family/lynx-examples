import { useRef, useState } from "@lynx-js/react";
import type { NodesRef } from "@lynx-js/types";
import { Tooltip } from "./Tooltip.jsx";

export function ButtonWithTooltip({ tooltipContent, children, ...rest }) {
  const [targetRect, setTargetRect] = useState(null);
  const buttonRef = useRef<NodesRef>(null);
  return (
    <>
      <view
        {...rest}
        ref={buttonRef}
        bindtouchstart={() => {
          buttonRef.current?.invoke({
            method: "boundingClientRect",
            success: (rect) => {
              setTargetRect({
                left: rect.left,
                top: rect.top,
                right: rect.right,
                bottom: rect.bottom,
              });
            },
          }).exec();
        }}
        bindtouchend={() => {
          setTargetRect(null);
        }}
        style={{ margin: "20px" }}
      >
        {children}
      </view>
      {targetRect !== null && (
        <Tooltip targetRect={targetRect}>
          {tooltipContent}
        </Tooltip>
      )}
    </>
  );
}
