import * as Lynx from "@lynx-js/types";

declare module "@lynx-js/types" {
  interface IntrinsicElements extends Lynx.IntrinsicElements {
    viewpager: {
      style?: string | Lynx.CSSProperties;
      children?: ReactNode;
      bindchange?: (e: { detail: { index: number } }) => void;
    };
    "viewpager-item": {
      style?: string | Lynx.CSSProperties;
      children?: ReactNode;
    };
  }
}
