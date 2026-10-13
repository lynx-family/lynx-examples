import generatedManifest from "./generated/manifest.json";
import { initGlobalEnv } from '../../../tools/nonvisual-runtime/main-thread-env.js';
import { createMainThreadRuntime } from "../../../tools/nonvisual-runtime/index.js";
import type { MainRuntimeApi, PlainObject, PublicManifest } from "../../../tools/nonvisual-runtime/index.js";

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
