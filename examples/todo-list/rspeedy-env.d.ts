/// <reference types="@lynx-js/rspeedy/client" />

import * as ReactLynx from "@lynx-js/react";
import * as Lynx from "@lynx-js/types";

interface InputProps extends Lynx.StandardProps {
  value?: string;
  placeholder?: string;
  "bottom-inset"?: string;
  bindinput?: Lynx.EventHandler<Lynx.BaseEvent<"input", { value: string }>>;
}

declare module "@lynx-js/react" {
  namespace JSX {
    interface IntrinsicElements extends ReactLynx.JSX.IntrinsicElements {
      "input": InputProps;
    }
  }
}
