import { getData, setData } from "../common/background/data.js";
import { setBackgroundEventHandler } from "../common/background/event.js";
import { setupBackground } from "../common/background/setup.js";
import type { Filter, RenderData } from "./types.js";

setupBackground();
const data = getData<RenderData>();

function addTodo(): void {
  const nextId = String(data.todos?.length ?? 0 + 1);
  setData({
    todos: [
      ...(data.todos ?? []),
      { id: nextId, title: `New task ${nextId}`, completed: false },
    ],
  });
}

function clearCompleted(): void {
  setData({
    todos: data.todos?.filter((todo) => !todo.completed) ?? [],
  });
}

function setFilter(filter: Filter): void {
  setData({ filter });
}

function toggleTodo(id: string): void {
  setData({
    todos: data.todos?.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo) ?? [],
  });
}

function reloadTodos(): void {
  setData({ loading: true });
  setTimeout(() => {
    setData({ loading: false });
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
