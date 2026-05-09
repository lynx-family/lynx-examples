import type { Filter, RenderState } from "./types.js";

let renderState = readInitialState();
let lastSyncedState = renderState;

function readInitialState(): Required<RenderState> {
  const params = lynxCoreInject.tt._params;
  return {
    ...(params?.updateData ?? {}),
    ...(params?.initData ?? {}),
  } as Required<RenderState>;
}

function setRenderState(patch: RenderState): void {
  renderState = { ...renderState, ...patch };
}

function createSyncPatch(): RenderState {
  const patch: RenderState = {};
  for (const key of Object.keys(renderState) as Array<keyof RenderState>) {
    if (renderState[key] !== lastSyncedState[key]) {
      (patch as Record<string, unknown>)[key] = renderState[key];
    }
  }
  return patch;
}

function syncState(): void {
  const patch = createSyncPatch();
  if (Object.keys(patch).length === 0) return;
  lastSyncedState = renderState;
  lynx.getNativeApp().callLepusMethod("updatePage", patch);
}

function addTodo(): void {
  const nextId = String(renderState.todos.length + 1);
  setRenderState({
    todos: [
      ...renderState.todos,
      { id: nextId, title: `New task ${nextId}`, completed: false },
    ],
  });
  syncState();
}

function clearCompleted(): void {
  setRenderState({
    todos: renderState.todos.filter((todo) => !todo.completed),
  });
  syncState();
}

function setFilter(filter: Filter): void {
  setRenderState({ filter });
  syncState();
}

function toggleTodo(id: string): void {
  setRenderState({
    todos: renderState.todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo),
  });
  syncState();
}

function reloadTodos(): void {
  setRenderState({ loading: true });
  syncState();
  setTimeout(() => {
    setRenderState({ loading: false });
    syncState();
  }, 600);
}

function handleTodoEvent(handlerName: string): boolean {
  if (handlerName === "reloadTodos") {
    reloadTodos();
    return true;
  }
  if (handlerName === "addTodo") {
    addTodo();
    return true;
  }
  if (handlerName === "clearCompleted") {
    clearCompleted();
    return true;
  }
  if (handlerName.startsWith("filter:")) {
    const filter = handlerName.slice("filter:".length);
    if (filter === "all" || filter === "active" || filter === "completed") {
      setFilter(filter);
    }
    return true;
  }
  if (handlerName.startsWith("toggle:")) {
    toggleTodo(handlerName.slice("toggle:".length));
    return true;
  }
  return false;
}

const previousPublishEvent = lynxCoreInject.tt.publishEvent;

lynxCoreInject.tt.publishEvent = (handlerName: string, data: unknown) => {
  if (handleTodoEvent(handlerName)) return;
  previousPublishEvent?.call(lynxCoreInject.tt, handlerName, data);
};
