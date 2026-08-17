import type {
  LoadBundleEntry,
  PerformanceEntry,
  PerformanceObserver as LynxPerformanceObserver,
  PipelineEntry,
} from "@lynx-js/types/background";

import { destroyLifetimeEventName, performanceUpdatedEventName } from "../constant.js";

export type PipelineOptions = Record<string, unknown> & {
  dsl: string;
  needTimestamps: boolean;
  pipelineID: string;
  pipelineOrigin: string;
  stage: string;
  timingFlag: string;
};

export type UpdateRenderOptions = {
  pipelineOptions?: PipelineOptions;
};

export interface PerformancePatch {
  kind: "initialRender" | "update";
  summary: string;
}

const coreContext = lynx.getCoreContext();
const pendingUpdates = new Set<string>();

let performanceObserver: LynxPerformanceObserver | undefined;
let nextTimingFlag = 0;
let isSetup = false;

function formatMilliseconds(value: unknown): string {
  return typeof value === "number" && Number.isFinite(value)
    ? `${value.toFixed(2)} ms`
    : "n/a";
}

function formatDuration(start: unknown, end: unknown): string {
  if (
    typeof start !== "number"
    || typeof end !== "number"
    || !Number.isFinite(start)
    || !Number.isFinite(end)
    || end < start
  ) {
    return "n/a";
  }
  return formatMilliseconds(end - start);
}

function reportPerformance(patch: PerformancePatch): void {
  coreContext.dispatchEvent({
    type: performanceUpdatedEventName,
    data: patch,
  });
}

function reportInitialRender(entry: LoadBundleEntry): void {
  reportPerformance({
    kind: "initialRender",
    summary: `Initial render: Lynx FCP ${formatMilliseconds(entry.lynxFcp.duration)}`,
  });
}

function reportPipelineUpdate(entry: PipelineEntry): void {
  if (!pendingUpdates.delete(entry.identifier)) return;
  reportPerformance({
    kind: "update",
    summary: `Update: Pipeline ${formatDuration(entry.pipelineStart, entry.pipelineEnd)}`,
  });
}

function onPerformanceEntry(entry: PerformanceEntry): void {
  console.info(
    `[performance] ${entry.entryType}.${entry.name}: ${JSON.stringify(entry)}`,
  );

  if (entry.entryType !== "pipeline") return;
  if (entry.name === "loadBundle") {
    reportInitialRender(entry as LoadBundleEntry);
    return;
  }
  reportPipelineUpdate(entry as PipelineEntry);
}

function cleanup(): void {
  performanceObserver?.disconnect();
  performanceObserver = undefined;
  pendingUpdates.clear();
  isSetup = false;
  coreContext.removeEventListener(destroyLifetimeEventName, cleanup);
}

export function setupPerformanceObserver(): void {
  if (isSetup) return;
  isSetup = true;
  coreContext.addEventListener(destroyLifetimeEventName, cleanup);

  if (typeof lynx.performance?.createObserver !== "function") {
    console.warn("[performance] PerformanceObserver is unavailable.");
    return;
  }

  performanceObserver = lynx.performance.createObserver(onPerformanceEntry);
  performanceObserver.observe(["pipeline"]);
}

export function beginUpdatePipeline(): PipelineOptions | undefined {
  const performance = lynx.performance;
  if (
    !performance
    || typeof performance._generatePipelineOptions !== "function"
    || typeof performance._onPipelineStart !== "function"
    || typeof performance._bindPipelineIdWithTimingFlag !== "function"
  ) {
    console.warn("[performance] Pipeline timing APIs are unavailable.");
    return undefined;
  }

  const timingFlag = `vanilla_update_${nextTimingFlag += 1}`;
  const pipelineOptions = performance._generatePipelineOptions();
  pipelineOptions.needTimestamps = true;
  pipelineOptions.pipelineOrigin = "updateTriggeredByBts";
  pipelineOptions.dsl = "vanilla";
  pipelineOptions.stage = "update";
  pipelineOptions.timingFlag = timingFlag;

  performance._onPipelineStart(
    pipelineOptions.pipelineID,
    pipelineOptions,
  );
  performance._bindPipelineIdWithTimingFlag(
    pipelineOptions.pipelineID,
    timingFlag,
  );
  pendingUpdates.add(timingFlag);
  return pipelineOptions;
}

export function cancelUpdatePipeline(
  pipelineOptions: PipelineOptions | undefined,
): void {
  if (pipelineOptions) {
    pendingUpdates.delete(pipelineOptions.timingFlag);
  }
}
