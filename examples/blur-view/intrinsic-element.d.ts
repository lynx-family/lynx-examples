import * as Lynx from "@lynx-js/types";
import type { ReactNode } from "react";

declare module "@lynx-js/types" {
  interface IntrinsicElements extends Lynx.IntrinsicElements {
    "blur-view": {
      "blur-radius"?: number | string;
      "blur-effect"?: string;
      "glass-style"?: string;
      "glass-tint-color"?: string;
      "glass-interactive"?: boolean | string;
      "android-capture-target"?: string;
      style?: string | Lynx.CSSProperties;
      children?: ReactNode;
    };
  }
}
