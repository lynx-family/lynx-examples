/// <reference types="@lynx-js/rspeedy/client" />

import * as ReactLynx from "@lynx-js/react";
import * as Lynx from "@lynx-js/types";

declare module "@lynx-js/types" {
  interface IntrinsicElements extends Lynx.IntrinsicElements {
    "explorer-input": {
      bindinput?: (e: Lynx.BaseEvent<"input", { value: string }>) => void;
      className?: string;
      id?: string;
      style?: string | Lynx.CSSProperties;
      value?: string | undefined;
      maxlines?: number;
      placeholder?: string;
    };
  }
}
