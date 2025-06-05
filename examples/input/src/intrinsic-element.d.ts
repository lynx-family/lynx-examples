import * as Lynx from "@lynx-js/types";

declare module "@lynx-js/types" {
  interface IntrinsicElements extends Lynx.IntrinsicElements {
    input: {
      bindinput?: (e: { type: "input"; detail: { value: string } }) => void;
      style: string | Lynx.CSSProperties;
      value?: string | undefined;
      placeholder?: string;
    };
  }
}
