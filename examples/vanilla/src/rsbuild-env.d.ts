/// <reference types="@rspeedy/core/client" />
/// <reference types="@lynx-js/types" />
/// <reference types="@lynx-js/type-element-api" />

import type { ElementRef } from "@lynx-js/type-element-api";
import { LynxSetTimeout } from "@lynx-js/types";

import type { PipelineOptions } from "./common/background/performance.js";

declare module "@lynx-js/types/background" {
  interface Performance {
    _bindPipelineIdWithTimingFlag?(
      pipelineID: string,
      timingFlag: string,
    ): void;
    _generatePipelineOptions?(): PipelineOptions;
    _onPipelineStart?(
      pipelineID: string,
      options?: PipelineOptions,
    ): void;
  }
}

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
