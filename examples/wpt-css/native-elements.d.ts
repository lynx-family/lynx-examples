import type { StandardProps } from "@lynx-js/types";

// x-webview is a host-provided custom native element used by the four runner
// helper cards. It is not a built-in element in the public JSX declarations.
declare module "@lynx-js/types" {
  interface IntrinsicElements {
    "x-webview": StandardProps & { src?: string };
  }
}
