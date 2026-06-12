/// <reference types="@rspeedy/core/client" />
/// <reference types="@lynx-js/types" />
/// <reference types="@lynx-js/type-element-api" />

import { LynxSetTimeout } from "@lynx-js/types";
declare module "@lynx-js/types/background" {
  interface NativeApp {
    callLepusMethod(name: string, data: unknown): void;
  }
  interface Lynx {
    getNativeApp(): NativeApp;
  }
}

declare global {
  const setTimeout: LynxSetTimeout;

  const lynxCoreInject: {
    tt: {
      _params?: {
        initData?: Record<string, unknown>;
        updateData?: Record<string, unknown>;
      };
      publishEvent?: (handlerName: string, data: unknown) => void;
    };
  };
}

export {};
