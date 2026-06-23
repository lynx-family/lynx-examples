/// <reference types="@rspeedy/core/client" />
/// <reference types="@lynx-js/types" />
/// <reference types="@lynx-js/type-element-api" />

import type { ElementRef } from "@lynx-js/type-element-api";
import { LynxSetTimeout } from "@lynx-js/types";

declare global {
  const setTimeout: LynxSetTimeout;
  // TODO: remove in future version
  function __AddEventListener(
    node: ElementRef,
    name: string,
    handler: (...args: unknown[]) => unknown,
    eventOptions?: Record<string, unknown>,
  ): void;
  function __RemoveEventListener(
    node: ElementRef,
    name: string,
    handler: (...args: unknown[]) => unknown,
    eventOptions?: Record<string, unknown>,
  ): void;
}

export {};
