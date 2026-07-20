import type { PropsWithChildren } from "@lynx-js/react";

interface TooltipContainerProps {
  // TODO(types): add main-thread:bindlayoutchange in `@lynx-js/types`
  handleLayoutChange: (event: any) => void;
}

export default function TooltipContainer(
  { children, handleLayoutChange }: PropsWithChildren<TooltipContainerProps>,
) {
  return (
    <view
      main-thread:bindlayoutchange={handleLayoutChange}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        color: "white",
        background: "#222",
        borderRadius: "4px",
        padding: "4px",
      }}
    >
      {children}
    </view>
  );
}
