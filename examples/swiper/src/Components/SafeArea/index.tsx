import type { ReactNode } from "@lynx-js/react";
import type { CSSProperties } from "@lynx-js/types";
import "./styles.scss";

export default function SafeArea({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  const isIOS = SystemInfo.platform === "iOS";

  return (
    <view className={`safe-area ${isIOS ? "ios" : "android"}`} style={style}>
      {children}
    </view>
  );
}
