import { updateDataFromBackgroundEventName } from "../constant.js";
import { beginUpdatePipeline, cancelUpdatePipeline, type PipelineOptions } from "./performance.js";

export type Data = Record<string, unknown>;

export type BackgroundDataPatch = {
  data: Data;
  pipelineOptions?: PipelineOptions;
};

type SetDataOptions = {
  shouldUpdateDataFromBackground?: boolean;
};

const data: Data = {};
let lastSyncedData: Data = { ...data };
let isFirstScreenDataFromMainThread = true;

export function getData<T = Data>(): T {
  return data as unknown as T;
}

export function setData(
  patch: Data,
  shouldIncludePipelineOptions = false,
  options: SetDataOptions = {},
): boolean {
  const { shouldUpdateDataFromBackground = true } = options;
  const pipelineOptions = shouldIncludePipelineOptions
    ? beginUpdatePipeline()
    : undefined;
  Object.assign(data, patch);
  if (!shouldUpdateDataFromBackground) {
    lastSyncedData = { ...data };
    cancelUpdatePipeline(pipelineOptions);
    return false;
  }
  const didUpdate = updateDataFromBackground(pipelineOptions);
  if (!didUpdate) {
    cancelUpdatePipeline(pipelineOptions);
  }
  return didUpdate;
}

export function updateDataFromMainThread(nextData: Data): void {
  const shouldUpdateDataFromBackground = !isFirstScreenDataFromMainThread;
  isFirstScreenDataFromMainThread = false;
  setData(nextData, false, { shouldUpdateDataFromBackground });
}

export function updateDataFromBackground(
  pipelineOptions?: PipelineOptions,
): boolean {
  const patch: Data = {};
  for (const [key, value] of Object.entries(data)) {
    if (value !== lastSyncedData[key]) {
      patch[key] = value;
    }
  }
  if (Object.keys(patch).length === 0) return false;
  lastSyncedData = { ...data };
  const update: BackgroundDataPatch = { data: patch, pipelineOptions };
  lynx.getCoreContext().dispatchEvent({
    type: updateDataFromBackgroundEventName,
    data: update,
  });
  return true;
}
