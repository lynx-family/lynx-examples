import * as Lynx from "@lynx-js/types";

declare module "@lynx-js/types" {
  interface IntrinsicElements extends Lynx.IntrinsicElements {
    refresh: {
      "enable-refresh"?: boolean;
      style?: string | Lynx.CSSProperties;
      startrefresh?: (e: { detail: {} }) => void;
      children?: ReactNode;
    };
    "refresh-header": {
      style?: string | Lynx.CSSProperties;
      children?: ReactNode;
    };
  }
}
