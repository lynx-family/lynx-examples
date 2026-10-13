export interface ProcessorTemplateConfig {
  readonly manifestImportPath: string;
  readonly runtimeImportPath: string;
}

export interface BackgroundTemplateConfig {
  readonly runtimeImportPath: string;
}

function json(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

/** Token-free classic TTML processor; session data is intentionally impossible here. */
export function renderMainThreadProcessorTemplate(config: ProcessorTemplateConfig): string {
  return `import generatedManifest from ${json(config.manifestImportPath)};
import { initGlobalEnv } from ${json(config.runtimeImportPath.replace(/index\.js$/, "main-thread-env.js"))};
import { createMainThreadRuntime } from ${json(config.runtimeImportPath)};
import type { MainRuntimeApi, PlainObject, PublicManifest } from ${json(config.runtimeImportPath)};

declare function __LoadStyleSheet(sectionKey: string, cardName: '__Card__'): unknown | Promise<unknown>;
declare function __ReplaceStyleSheets(sheets: readonly unknown[]): unknown | Promise<unknown>;
declare function __GetComputedStyleByKey(element: unknown, property: string): unknown;
declare function __FlushElementTree(): void;

const manifest = generatedManifest as PublicManifest;
interface MainThreadElement {
  readonly element?: unknown;
  getComputedStyleProperty?(property: string): unknown;
}
interface ComputedTextElement { getComputedStyleProperty(property: string): unknown; }
interface MainThreadLynx { querySelectorAll(selector: string): readonly MainThreadElement[]; }

function hasQuerySelectorAll(value: unknown): value is MainThreadLynx {
  return value !== null && typeof value === 'object' &&
    'querySelectorAll' in value && typeof value.querySelectorAll === 'function';
}

function mainThreadLynx(): MainThreadLynx {
  if (typeof lynx === 'undefined') throw new Error('lynx main-thread global is unavailable');
  if (!hasQuerySelectorAll(lynx) || typeof requestAnimationFrame !== 'function') initGlobalEnv();
  if (!hasQuerySelectorAll(lynx)) throw new Error('lynx.querySelectorAll is unavailable after main-thread initialization');
  if (typeof requestAnimationFrame !== 'function') throw new Error('requestAnimationFrame is unavailable after main-thread initialization');
  return lynx;
}

function textElement(element: MainThreadElement): ComputedTextElement {
  return {
    getComputedStyleProperty(property) {
      if (typeof element.getComputedStyleProperty === 'function') {
        return element.getComputedStyleProperty(property);
      }
      if (typeof __GetComputedStyleByKey === 'undefined') {
        throw new Error('element.getComputedStyleProperty is unavailable');
      }
      if (!('element' in element) || element.element === undefined) {
        throw new Error('computed-style fallback cannot access the native element');
      }
      return __GetComputedStyleByKey(element.element, property);
    },
  };
}

if (__MAIN_THREAD__) {
  const runtime = createMainThreadRuntime(manifest, {
    loadStyleSheet: (sectionKey, cardName) => {
      if (typeof __LoadStyleSheet === 'undefined') throw new Error('__LoadStyleSheet is unavailable');
      return __LoadStyleSheet(sectionKey, cardName);
    },
    replaceStyleSheets: (sheets) => {
      if (typeof __ReplaceStyleSheets === 'undefined') throw new Error('__ReplaceStyleSheets is unavailable');
      return __ReplaceStyleSheets(sheets);
    },
    querySelectorAll: (selector) => mainThreadLynx().querySelectorAll(selector).map(textElement),
    flushLayout: () => {
      if (typeof __FlushElementTree === 'undefined') throw new Error('__FlushElementTree is unavailable');
      __FlushElementTree();
    },
    requestAnimationFrame: (callback) => {
      mainThreadLynx();
      return requestAnimationFrame(callback);
    },
  });
  const bridge = globalThis as typeof globalThis & {
    start?: MainRuntimeApi['start'];
    poll?: MainRuntimeApi['poll'];
    cancel?: MainRuntimeApi['cancel'];
  };
  bridge.start = (input: PlainObject) => runtime.start(input);
  bridge.poll = (input: PlainObject) => runtime.poll(input);
  bridge.cancel = (input: PlainObject) => runtime.cancel(input);
}
`;
}

/**
 * Background index source has no concrete secret. The build injects the named
 * compile-time constant with exactly
 * {endpoint,runId,token,buildFingerprint,devicePollBudgetMs,test}.
 */
export function renderBackgroundIndexTemplate(config: BackgroundTemplateConfig): string {
  const runtimeImportPath = config.runtimeImportPath.replace(/index\.js$/, "react.js");
  return `import './processor';
import { useTestharness } from ${json(runtimeImportPath)};

function invokeMainThread(name: string, input: Record<string, unknown>) {
  'main thread';
  const bridge = globalThis as typeof globalThis & Record<string, (input: Record<string, unknown>) => Record<string, unknown>>;
  if (!['start', 'poll', 'cancel'].includes(name)) throw new Error('Unknown testharness method');
  return bridge[name](input);
}

`;
}
