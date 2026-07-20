import type { ElementRef } from "@lynx-js/type-element-api";

import { createPage, createText, createView, replaceChildren } from "../common/main-thread/element.js";
import { bindBackgroundEvent } from "../common/main-thread/event.js";
import { setupMainThread } from "../common/main-thread/setup.js";
import type { Filter, RenderData, Todo } from "./types.js";

const { page, pageId } = createPage("page");

let summarySlot: ElementRef | undefined;
let filtersSlot: ElementRef | undefined;
let repeatSlot: ElementRef | undefined;
let currentData: Required<RenderData> | undefined;
const defaultTodos: Todo[] = [
  { id: "1", title: "Create the vanilla project", completed: true },
  {
    id: "2",
    title: "Render todos with Element PAPI",
    completed: false,
  },
  {
    id: "3",
    title: "Handle tap events in background.ts",
    completed: false,
  },
];

function createButton(
  className: string,
  label: string,
  handlerName: string,
): ElementRef {
  const button = createView(pageId, className);
  bindBackgroundEvent(button, "tap", handlerName);
  __AppendElement(button, createText(pageId, "button-label", label).text);
  return button;
}

function visibleTodos(data: Required<RenderData>): Todo[] {
  if (data.filter === "active") {
    return data.todos.filter((todo) => !todo.completed);
  }
  if (data.filter === "completed") {
    return data.todos.filter((todo) => todo.completed);
  }
  return data.todos;
}

function renderSummary(data: Required<RenderData>): void {
  if (!summarySlot) return;
  const total = data.todos.length;
  const completed = data.todos.filter((t) => t.completed).length;
  const active = total - completed;
  const summary = createView(
    pageId,
    data.loading ? "summary summary-loading" : "summary",
  );
  __AppendElement(
    summary,
    createText(
      pageId,
      "summary-title",
      data.loading
        ? "Refreshing todos..."
        : `${active} active, ${completed} done`,
    ).text,
  );
  __AppendElement(
    summary,
    createText(pageId, "summary-meta", `${total} total tasks`).text,
  );
  replaceChildren(summarySlot, [summary]);
}

function renderFilters(data: Required<RenderData>): void {
  if (!filtersSlot) return;
  const filters = createView(pageId, "filters");
  const options: Array<{ label: string; value: Filter }> = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Done", value: "completed" },
  ];
  for (const option of options) {
    __AppendElement(
      filters,
      createButton(
        data.filter === option.value ? "filter filter-selected" : "filter",
        option.label,
        `filter:${option.value}`,
      ),
    );
  }
  replaceChildren(filtersSlot, [filters]);
}

function createTodoRow(todo: Todo): ElementRef {
  const row = createView(
    pageId,
    todo.completed ? "todo todo-completed" : "todo",
  );
  bindBackgroundEvent(
    row,
    "tap",
    `toggle:${todo.id}`,
  );
  __AppendElement(row, createText(pageId, "todo-title", todo.title).text);
  __AppendElement(
    row,
    createText(
      pageId,
      "todo-meta",
      todo.completed ? "Completed" : "Tap to complete",
    ).text,
  );
  return row;
}

function renderTodos(data: Required<RenderData>): void {
  if (!repeatSlot) return;
  if (data.loading) {
    replaceChildren(repeatSlot, [
      createText(pageId, "repeat-message", "Loading tasks...").text,
    ]);
    return;
  }
  const todos = visibleTodos(data);
  replaceChildren(
    repeatSlot,
    todos.length > 0
      ? todos.map(createTodoRow)
      : [createText(pageId, "empty-title", "No tasks yet").text],
  );
}

function renderData(data: Required<RenderData>, patch?: RenderData): void {
  if (!patch) {
    renderSummary(data);
    renderFilters(data);
    renderTodos(data);
    return;
  }
  if (patch.loading !== undefined || patch.todos !== undefined) {
    renderSummary(data);
  }
  if (patch.filter !== undefined) {
    renderFilters(data);
  }
  if (
    patch.loading !== undefined
    || patch.filter !== undefined
    || patch.todos !== undefined
  ) {
    renderTodos(data);
  }
}

function processData(data: RenderData): Required<RenderData> {
  const raw = data as Record<string, unknown>;
  const filter = raw["filter"];
  currentData = {
    loading: typeof raw["loading"] === "boolean"
      ? raw["loading"]
      : currentData?.loading ?? false,
    filter: filter === "all" || filter === "active" || filter === "completed"
      ? filter
      : currentData?.filter ?? "all",
    todos: Array.isArray(raw["todos"])
      ? (raw["todos"] as Todo[])
      : currentData?.todos ?? defaultTodos,
  };
  return currentData;
}

function renderPage(data: RenderData): void {
  __AppendElement(page, createText(pageId, "title", "Todo List").text);

  const actions = createView(pageId, "actions");
  __AppendElement(
    actions,
    createButton(
      "button button-primary",
      "Reload",
      "reloadTodos",
    ),
  );
  __AppendElement(
    actions,
    createButton("button", "Add", "addTodo"),
  );
  __AppendElement(
    actions,
    createButton(
      "button button-danger",
      "Clear Done",
      "clearCompleted",
    ),
  );
  __AppendElement(page, actions);

  summarySlot = createView(pageId, "summary-slot");
  filtersSlot = createView(pageId, "filters-slot");
  repeatSlot = createView(pageId, "todo-repeat");
  __AppendElement(page, summarySlot);
  __AppendElement(page, filtersSlot);
  __AppendElement(page, repeatSlot);

  renderData(data as Required<RenderData>);
}

function updatePage(patch: RenderData): void {
  if (!currentData) return;
  currentData = {
    ...currentData,
    ...patch,
  };
  renderData(currentData, patch);
  __FlushElementTree();
}

setupMainThread({
  processData,
  renderPage,
  updatePage,
});
