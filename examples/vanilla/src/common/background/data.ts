import { updateDataFromBackgroundEventName } from "../constant.js";

export type Data = Record<string, unknown>;

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
  options: SetDataOptions = {},
): void {
  const { shouldUpdateDataFromBackground = true } = options;
  Object.assign(data, patch);
  if (!shouldUpdateDataFromBackground) {
    lastSyncedData = { ...data };
    return;
  }
  updateDataFromBackground();
}

export function updateDataFromMainThread(nextData: Data): void {
  const shouldUpdateDataFromBackground = !isFirstScreenDataFromMainThread;
  isFirstScreenDataFromMainThread = false;
  setData(nextData, { shouldUpdateDataFromBackground });
}

export function updateDataFromBackground(): void {
  const patch: Data = {};
  for (const [key, value] of Object.entries(data)) {
    if (value !== lastSyncedData[key]) {
      patch[key] = value;
    }
  }
  if (Object.keys(patch).length === 0) return;
  lastSyncedData = { ...data };
  lynx.getCoreContext().dispatchEvent({
    type: updateDataFromBackgroundEventName,
    data: patch,
  });
}
