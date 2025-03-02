import TooltipContainer from "./TooltipContainer.jsx";

export function Tooltip({ children, targetRect }) {
  const handleLayoutChange = (e) => {
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
