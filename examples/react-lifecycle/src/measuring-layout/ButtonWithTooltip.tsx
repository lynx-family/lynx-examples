import { type PropsWithChildren, type ReactNode, useRef, useState } from "@lynx-js/react";
import type { NodesRef } from "@lynx-js/types";
import { Tooltip } from "./Tooltip.jsx";

export interface Rect {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

interface ButtonWithTooltipProps {
  tooltipContent: ReactNode;
}

export function ButtonWithTooltip({ tooltipContent, children, ...rest }: PropsWithChildren<ButtonWithTooltipProps>) {
  const [targetRect, setTargetRect] = useState<Rect | null>(null);
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
