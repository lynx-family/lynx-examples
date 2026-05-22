import { useGlobalProps } from "@lynx-js/react";
import type { ReactNode } from "react";

import "./theme-frame.css";

export function ThemeFrame({
  children,
  theme,
}: {
  children: ReactNode;
  theme?: "auto" | "luna-light" | "lunaris-light" | "luna-dark" | "lunaris-dark";
}) {
  const globalProps = useGlobalProps() as { theme?: string };
  const themeClass = theme && theme !== "auto"
    ? theme
    : globalProps.theme === "dark"
    ? "lunaris-dark"
    : "lunaris-light";

  return (
    <view className={`theme-frame ${themeClass}`}>
      <view className="theme-content">{children}</view>
    </view>
  );
}
