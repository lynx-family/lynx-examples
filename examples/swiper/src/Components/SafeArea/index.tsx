import type { ReactNode } from "@lynx-js/react";
import type { CSSProperties } from "@lynx-js/types";
import "./styles.scss";

export default function SafeArea({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  const isIOS = lynx.__globalProps.platform === "ios";

  return (
    <view class={`safe-area ${isIOS ? "ios" : "android"}`} style={style}>
      {children}
    </view>
  );
}
