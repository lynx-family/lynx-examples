// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import "@lynx-js/types";

declare global {
  const __DISABLE_CREATE_SELECTOR_QUERY_INCOMPATIBLE_WARNING__: boolean;
  const __REF_FIRE_IMMEDIATELY__: boolean;
  const __TESTING_FORCE_RENDER_TO_OPCODE__: boolean;
  const __FIRST_SCREEN_SYNC_TIMING__: "immediately" | "jsReady";
  const __DEV__: boolean;
  const __JS__: boolean;
  const __LEPUS__: boolean;
  const __BACKGROUND__: boolean;
  const __MAIN_THREAD__: boolean;
  const __PROFILE__: boolean;

  function __CreatePage(componentId: string, cssId: number): FiberElement;
  function __CreateElement(
    tag: string,
    parentComponentUniqueId: number,
  ): FiberElement;
  function __CreateWrapperElement(
    parentComponentUniqueId: number,
  ): FiberElement;
  function __CreateText(parentComponentUniqueId: number): FiberElement;
  function __CreateImage(parentComponentUniqueId: number): FiberElement;
  function __CreateView(parentComponentUniqueId: number): FiberElement;
  function __CreateRawText(s: string): FiberElement;
  function __CreateList(
    parentComponentUniqueId: number,
    componentAtIndex: ComponentAtIndexCallback,
    enqueueComponent: EnqueueComponentCallback,
    info?: any,
  ): FiberElement;
  function __AppendElement(
    parent: FiberElement,
    child: FiberElement,
  ): FiberElement;
  function __InsertElementBefore(
    parent: FiberElement,
    child: FiberElement,
    ref?: FiberElement,
  ): FiberElement;
  function __RemoveElement(
    parent: FiberElement,
    child: FiberElement,
  ): FiberElement;
  function __ReplaceElement(a: FiberElement, b: FiberElement): FiberElement;
  function __FirstElement(parent: FiberElement): FiberElement;
  function __LastElement(parent: FiberElement): FiberElement;
  function __NextElement(parent: FiberElement): FiberElement;
  function __GetPageElement(): FiberElement | undefined;
  function __GetParent(of: FiberElement): FiberElement | undefined;
  function __AddDataset(node: FiberElement, key: string, value: any): void;
  function __SetDataset(node: FiberElement, value: Record<string, any>): void;
  function __GetDataset(node: FiberElement): Record<string, any>;
  function __SetAttribute(e: FiberElement, key: string, value: any): void;
  function __GetAttributes(e: FiberElement): Record<string, any>;
  function __GetAttributeByName(e: FiberElement, name: string): any;
  function __GetAttributeNames(e: FiberElement): string[];
  function __SetClasses(e: FiberElement, c: string): void;
  function __SetCSSId(
    e: FiberElement | FiberElement[],
    cssId: number,
    entryName?: string,
  ): void;
  function __AddInlineStyle(
    e: FiberElement,
    key: number | string,
    value: any,
  ): void;
  function __SetInlineStyles(e: FiberElement, style: string): void;
  function __AddEvent(
    e: FiberElement,
    eventType: string,
    eventName: string,
    event: Record<string, any> | string | undefined,
  ): void;
  function __SetID(e: FiberElement, id: string | undefined | null): void;
  function __GetElementUniqueID(e: FiberElement): number;
  function __GetTag(e: FiberElement): string;
  function __FlushElementTree(): void;
  function __FlushElementTree(element: FiberElement): void;
  function __FlushElementTree(
    element: FiberElement,
    options: FlushOptions,
  ): void;
  function __UpdateListCallbacks(
    list: FiberElement,
    componentAtIndex: ComponentAtIndexCallback,
    enqueueComponent: EnqueueComponentCallback,
  ): void;
  function __OnLifecycleEvent(...args: any[]): void;
  function _ReportError(error: Error, options: { errorCode: number }): void;
  function __QueryComponent(source: string): { evalResult: any };
  function __SetGestureDetector(
    node: FiberElement,
    id: number,
    type: number,
    config: any,
    relationMap: Record<string, number[]>,
  ): void;

  interface FiberElement {
    $$typeof: symbol;
  }

  type ComponentAtIndexCallback = (
    list: FiberElement,
    listID: number,
    cellIndex: number,
    operationID: number,
    enableReuseNotification: boolean,
  ) => void;

  type EnqueueComponentCallback = (
    list: FiberElement,
    listID: number,
    sign: number,
  ) => void;

  interface FlushOptions {
    triggerLayout?: boolean;
    operationID?: any;
    __lynx_timing_flag?: string;
    nativeUpdateDataOrder?: number;
    elementID?: number;
    listID?: number;
    listReuseNotification?: {
      listElement: FiberElement;
      itemKey: string;
    };
    pipelineOptions?: PipelineOptions;
  }

  interface UpdatePageOption {
    nativeUpdateDataOrder?: number;
    reloadTemplate?: boolean;
    reloadFromJS?: boolean;
    resetPageData?: boolean;
    pipelineOptions?: PipelineOptions;
  }

  interface LynxCallByNative {
    renderPage: (data: any) => void;
    updatePage: (data: any, options?: UpdatePageOption) => void;
    // processData: (data: any, processorName?: string) => any;
    updateGlobalProps: (data: any, options?: UpdatePageOption) => void;
    getPageData: () => any;
    removeComponents: () => void;
  }

  interface PipelineOptions {
    pipelineID: string; // Returned by native when calling `onPipelineStart()`
    needTimestamps: boolean; // Whether timing points should be reported
  }
}

interface NativeApp {
  callLepusMethod(
    name: string,
    args: Record<string, unknown>,
    callback?: (ret: any) => void,
  ): void;
  markTiming?(timingFlag: string, key: string): void;
  createJSObjectDestructionObserver?(callback: () => void): unknown;
}

interface NativeLynx {
  /**
   * @deprecated
   */
  QueryComponent?(source: string, callback: (result: any) => void): void;
}
