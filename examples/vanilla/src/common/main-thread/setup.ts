import type { LynxMessageEvent, MessageEvent } from "@lynx-js/types";

import type { UpdateRenderOptions } from "../background/performance.js";
import {
  destroyLifetimeEventName,
  renderPageEventName,
  updateDataFromBackgroundEventName,
  updateDataFromMainThreadEventName,
  updatePageEventName,
} from "../constant.js";
import { clearAllEvents } from "./event.js";

type RenderPageEvent = Extract<
  LynxMessageEvent,
  { type: typeof renderPageEventName }
>;
type UpdatePageEvent = Extract<
  LynxMessageEvent,
  { type: typeof updatePageEventName }
>;

type BackgroundDataEvent = {
  data?: unknown;
  pipelineOptions?: UpdateRenderOptions["pipelineOptions"];
};

export function setupMainThread<TInput, TData>(
  lifecycle: {
    processData?: (data: TInput) => TData;
    renderPage: (data: TData) => void;
    updatePage?: (data: TData, options?: UpdateRenderOptions) => void;
  },
  options: {
    enableBackgroundSync?: boolean;
  } = {},
): void {
  const { enableBackgroundSync = true } = options;
  const engine = lynx.getEngine();
  const background = enableBackgroundSync ? lynx.getJSContext() : undefined;

  Object.assign(globalThis, {
    processData: (data: TInput): TInput => data,
  });

  const processDataFromEngine = (data: TInput): TData => {
    const processedData = (lifecycle.processData?.(data) ?? {}) as TData;
    if (enableBackgroundSync) {
      lynx.getJSContext().dispatchEvent({
        type: updateDataFromMainThreadEventName,
        data: processedData,
      });
    }
    return processedData;
  };

  const onRenderPage = (event: MessageEvent): void => {
    const [data] = (event as RenderPageEvent).data;
    lifecycle.renderPage(processDataFromEngine(data as TInput));
  };

  // get update data from engine
  const onUpdatePage = (event: MessageEvent): void => {
    if (!lifecycle.updatePage) return;
    const [data] = (event as UpdatePageEvent).data;
    lifecycle.updatePage(processDataFromEngine(data as TInput));
  };

  // get update data from background thread
  const onUpdateDataFromBackground = (event: MessageEvent): void => {
    if (!lifecycle.updatePage) return;
    const update = event.data as BackgroundDataEvent | undefined;
    if (!update || typeof update !== "object" || Array.isArray(update)) return;
    lifecycle.updatePage(update.data as TData, {
      pipelineOptions: update.pipelineOptions,
    });
  };

  // add listener for render and update page
  engine.addEventListener(renderPageEventName, onRenderPage);
  if (lifecycle.updatePage) {
    engine.addEventListener(updatePageEventName, onUpdatePage);
    background?.addEventListener(
      updateDataFromBackgroundEventName,
      onUpdateDataFromBackground,
    );
  }

  // remove event listeners when lynx view is destroyed
  const cleanup = (): void => {
    if (enableBackgroundSync) {
      lynx.getJSContext().dispatchEvent({
        type: destroyLifetimeEventName,
        data: undefined,
      });
    }
    clearAllEvents();
    engine.removeEventListener(renderPageEventName, onRenderPage);
    if (lifecycle.updatePage) {
      engine.removeEventListener(updatePageEventName, onUpdatePage);
      background?.removeEventListener(
        updateDataFromBackgroundEventName,
        onUpdateDataFromBackground,
      );
    }
    engine.removeEventListener(destroyLifetimeEventName, cleanup);
  };
  engine.addEventListener(destroyLifetimeEventName, cleanup);
}
