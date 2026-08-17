import { getData, setData } from "../common/background/data.js";
import { setBackgroundEventHandler } from "../common/background/event.js";
import { setupBackground } from "../common/background/setup.js";
import type { Filter, RenderData } from "./types.js";

setupBackground({ enablePerformanceObserver: true });
const data = getData<RenderData>();

function addTodo(): void {
  const nextId = String(
    Math.max(0, ...(data.todos ?? []).map((todo) => Number(todo.id))) + 1,
  );
  setData({
    todos: [
      ...(data.todos ?? []),
      { id: nextId, title: `New task ${nextId}`, completed: false },
    ],
  }, true);
}

function clearCompleted(): void {
  setData({
    todos: data.todos?.filter((todo) => !todo.completed) ?? [],
  }, true);
}

function setFilter(filter: Filter): void {
  setData({ filter }, true);
}

function toggleTodo(id: string): void {
  setData({
    todos: data.todos?.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo) ?? [],
  }, true);
}

function reloadTodos(): void {
  setData({ loading: true }, true);
  setTimeout(() => {
    setData({ loading: false }, true);
  }, 600);
}

setBackgroundEventHandler((handlerName: string) => {
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
