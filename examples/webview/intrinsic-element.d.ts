import type * as Lynx from "@lynx-js/types";

declare module "@lynx-js/types" {
  interface IntrinsicElements extends Lynx.IntrinsicElements {
    "webview": {
      style?: string | Lynx.CSSProperties;
      ref?: any;
      src?: string | null;
      html?: string | null;
      "enable-debug"?: boolean;
      bindload?: () => void;
      bindmessage?: (e: any) => void;
    };
  }
}
