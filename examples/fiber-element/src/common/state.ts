export type State = Record<string, unknown>;

// read initial state from main thread
export function readInitialState<T extends State = State>(): T {
  const params = lynxCoreInject.tt._params;
  return {
    ...(params?.updateData ?? {}),
    ...(params?.initData ?? {}),
  } as T;
}
export const renderState: State = readInitialState();
export function setRenderState(patch: State): void {
  Object.assign(renderState, patch);
}

let lastSyncedState: State = { ...renderState };

function createSyncPatch(): State {
  const patch: State = {};
  for (const [key, value] of Object.entries(renderState)) {
    if (value !== lastSyncedState[key]) {
      patch[key] = value;
    }
  }
  return patch;
}

// sync state to main thread
export function syncState(): void {
  const patch = createSyncPatch();
  if (Object.keys(patch).length === 0) return;
  lastSyncedState = { ...renderState };
  lynx.getNativeApp().callLepusMethod("updatePage", patch);
}
