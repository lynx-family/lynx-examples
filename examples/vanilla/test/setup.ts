// @lynx-js/testing-environment implements the string/worklet event PAPI used
// by ReactLynx. The vanilla example binds function listeners through
// __AddEventListener, so polyfill that family on the main-thread globals.
// Listeners are stored on the element (`__vanillaListeners`) so tests can
// simulate a user gesture by invoking them.

type Handler = (...args: unknown[]) => unknown;

type ListenerHost = {
  __vanillaListeners?: Record<string, Set<Handler>>;
  childNodes?: ArrayLike<unknown>;
};

globalThis.onInjectMainThreadGlobals = (target: any) => {
  target.__AddEventListener = (
    node: ListenerHost,
    name: string,
    handler: Handler,
  ): void => {
    node.__vanillaListeners ??= {};
    (node.__vanillaListeners[name] ??= new Set()).add(handler);
  };

  target.__RemoveEventListener = (
    node: ListenerHost,
    name: string,
    handler: Handler,
  ): void => {
    node.__vanillaListeners?.[name]?.delete(handler);
  };

  target.__GetChildren = (node: ListenerHost): unknown[] => Array.from(node.childNodes ?? []);

  target.__ElementIsEqual = (left: unknown, right: unknown): boolean => left === right;
};
