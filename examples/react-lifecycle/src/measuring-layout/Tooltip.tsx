import type { PropsWithChildren } from "@lynx-js/react";
import type { Rect } from "./ButtonWithTooltip.jsx";
import TooltipContainer from "./TooltipContainer.jsx";

interface TooltipProps {
  targetRect: Rect | null;
}

export function Tooltip({ children, targetRect }: PropsWithChildren<TooltipProps>) {
  const handleLayoutChange = (e: any) => {
    "main thread";
    let tooltipX = 0;
    let tooltipY = 0;
    if (targetRect !== null) {
      tooltipX = targetRect.left;
      tooltipY = targetRect.top - e.detail.height;
      if (tooltipY < 0) {
        // It doesn't fit above, so place below.
        tooltipY = targetRect.bottom;
      }
    }

    e.currentTarget.setStyleProperty("transform", `translate3d(${tooltipX}px, ${tooltipY}px, 0)`);
  };

  return (
    <TooltipContainer handleLayoutChange={handleLayoutChange}>
      {children}
    </TooltipContainer>
  );
}
