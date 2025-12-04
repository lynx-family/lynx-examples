import * as Lynx from "@lynx-js/types";

declare module "@lynx-js/types" {
  interface IntrinsicElements extends Lynx.IntrinsicElements {
    overlay: {
      style: string | Lynx.CSSProperties;
      value?: string | undefined;
      visible?: boolean;
      children?: ReactNode;
    };
  }
}
