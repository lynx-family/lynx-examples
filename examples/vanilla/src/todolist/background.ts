import { setEventHandler } from "../common/event.js";
import { renderState, setRenderState, syncState } from "../common/state.js";
import type { Filter, RenderState } from "./types.js";

const state = renderState as RenderState;

function addTodo(): void {
  const nextId = String(state.todos?.length ?? 0 + 1);
  setRenderState({
    todos: [
      ...(state.todos ?? []),
      { id: nextId, title: `New task ${nextId}`, completed: false },
    ],
  });
  syncState();
}

function clearCompleted(): void {
  setRenderState({
    todos: state.todos?.filter((todo) => !todo.completed) ?? [],
  });
  syncState();
}

function setFilter(filter: Filter): void {
  setRenderState({ filter });
  syncState();
}

function toggleTodo(id: string): void {
  setRenderState({
    todos: state.todos?.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo) ?? [],
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

setEventHandler((handlerName: string) => {
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
});
