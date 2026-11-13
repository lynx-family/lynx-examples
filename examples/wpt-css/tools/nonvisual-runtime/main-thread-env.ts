/**
 * Minimal environment for the migrated computed-style processors.
 * Use public native Element PAPI, not an internal worklet package or a React
 * runtime deep import. This function is called only inside __MAIN_THREAD__.
 */
declare function __GetPageElement(): unknown;
declare function __QuerySelectorAll(
  root: unknown,
  selector: string,
  options: { onlyCurrentComponent: boolean },
): unknown[];
declare function __GetComputedStyleByKey(element: unknown, property: string): unknown;

interface ComputedElement {
  getComputedStyleProperty(property: string): unknown;
}

interface MainThreadEnvironment {
  querySelectorAll?: (selector: string) => readonly ComputedElement[];
  requestAnimationFrame?: (callback: (timestamp: number) => void) => number;
}

export function initGlobalEnv(): void {
  const environment = lynx as unknown as MainThreadEnvironment;
  if (typeof environment.querySelectorAll !== "function") {
    if (
      typeof __GetPageElement !== "function" || typeof __QuerySelectorAll !== "function"
      || typeof __GetComputedStyleByKey !== "function"
    ) {
      throw new Error("Native Element PAPI is unavailable for computed-style tests");
    }
    environment.querySelectorAll = (selector) =>
      __QuerySelectorAll(__GetPageElement(), selector, { onlyCurrentComponent: false }).map((element) => ({
        getComputedStyleProperty: (property) => __GetComputedStyleByKey(element, property),
      }));
  }
  if (typeof globalThis.requestAnimationFrame !== "function") {
    const requestFrame = environment.requestAnimationFrame;
    if (typeof requestFrame !== "function") {
      throw new Error("Main-thread requestAnimationFrame is unavailable");
    }
    globalThis.requestAnimationFrame = (callback) => {
      if (typeof callback !== "function") throw new TypeError("requestAnimationFrame requires a callback");
      return requestFrame.call(lynx, (timestamp) => callback(timestamp));
    };
  }
}
