import * as Lynx from "@lynx-js/types";

declare module "@lynx-js/types" {
  interface IntrinsicElements extends Lynx.IntrinsicElements {
    "title-bar-view": {
      "moveable"?: boolean;
      style?: string | Lynx.CSSProperties;
      children?: ReactNode;
    };
  }
}
