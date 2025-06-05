import * as Lynx from "@lynx-js/types";

declare module "@lynx-js/types" {
  interface IntrinsicElements extends Lynx.IntrinsicElements {
    textarea: {
      bindinput?: (e: { type: "input"; detail: { value: string } }) => void;
      class?: string;
      style?: string | Lynx.CSSProperties;
      value?: string | undefined;
      maxlines?: number;
      placeholder?: string;
    };
  }
}
