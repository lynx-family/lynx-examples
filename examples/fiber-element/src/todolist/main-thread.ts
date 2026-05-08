import type { ElementRef } from "@lynx-js/type-element-api";

import type { Filter, RenderState, Todo } from "./types.js";

const page = __CreatePage("0", 0);
const pageId = __GetElementUniqueID(page);
__SetClasses(page, "page");

let summarySlot: ElementRef | undefined;
let filtersSlot: ElementRef | undefined;
let repeatSlot: ElementRef | undefined;
let currentState: Required<RenderState> | undefined;

function createText(className: string, value: string): ElementRef {
  const text = __CreateText(pageId);
  __SetClasses(text, className);
  __AppendElement(text, __CreateRawText(value));
  return text;
}

function replaceChildren(
  parent: ElementRef,
  nextChildren: ElementRef[],
): void {
  __ReplaceElements(parent, nextChildren, __GetChildren(parent));
}

function createButton(
  className: string,
  label: string,
  handlerName: string,
): ElementRef {
  const button = __CreateView(pageId);
  __SetClasses(button, className);
  __AddEvent(button, "bindEvent", "tap", handlerName);
  __AppendElement(button, createText("button-label", label));
  return button;
}

function visibleTodos(state: Required<RenderState>): Todo[] {
  if (state.filter === "active") {
    return state.todos.filter((todo) => !todo.completed);
  }
  if (state.filter === "completed") {
    return state.todos.filter((todo) => todo.completed);
  }
  return state.todos;
}

function renderSummary(state: Required<RenderState>): void {
  if (!summarySlot) return;
  const total = state.todos.length;
  const completed = state.todos.filter((t) => t.completed).length;
  const active = total - completed;
  const summary = __CreateView(pageId);
  __SetClasses(
    summary,
    state.loading ? "summary summary-loading" : "summary",
  );
  __AppendElement(
    summary,
    createText(
      "summary-title",
      state.loading
        ? "Refreshing todos..."
        : `${active} active, ${completed} done`,
    ),
  );
  __AppendElement(
    summary,
    createText("summary-meta", `${total} total tasks`),
  );
  replaceChildren(summarySlot, [summary]);
}

function renderFilters(state: Required<RenderState>): void {
  if (!filtersSlot) return;
  const filters = __CreateView(pageId);
  __SetClasses(filters, "filters");
  const options: Array<{ label: string; value: Filter }> = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Done", value: "completed" },
  ];
  for (const option of options) {
    __AppendElement(
      filters,
      createButton(
        state.filter === option.value ? "filter filter-selected" : "filter",
        option.label,
        `filter:${option.value}`,
      ),
    );
  }
  replaceChildren(filtersSlot, [filters]);
}

function createTodoRow(todo: Todo): ElementRef {
  const row = __CreateView(pageId);
  __SetClasses(row, todo.completed ? "todo todo-completed" : "todo");
  __AddEvent(row, "bindEvent", "tap", `toggle:${todo.id}`);
  __AppendElement(row, createText("todo-title", todo.title));
  __AppendElement(
    row,
    createText("todo-meta", todo.completed ? "Completed" : "Tap to complete"),
  );
  return row;
}

function renderTodos(state: Required<RenderState>): void {
  if (!repeatSlot) return;
  if (state.loading) {
    replaceChildren(repeatSlot, [createText("repeat-message", "Loading tasks...")]);
    return;
  }
  const todos = visibleTodos(state);
  replaceChildren(
    repeatSlot,
    todos.length > 0
      ? todos.map(createTodoRow)
      : [createText("empty-title", "No tasks yet")],
  );
}

function renderState(state: Required<RenderState>, patch?: RenderState): void {
  if (!patch) {
    renderSummary(state);
    renderFilters(state);
    renderTodos(state);
    return;
  }
  if (patch.loading !== undefined || patch.todos !== undefined) {
    renderSummary(state);
  }
  if (patch.filter !== undefined) {
    renderFilters(state);
  }
  if (
    patch.loading !== undefined
    || patch.filter !== undefined
    || patch.todos !== undefined
  ) {
    renderTodos(state);
  }
}

function processData(data: RenderState): Required<RenderState> {
  const raw = data as Record<string, unknown>;
  const filter = raw["filter"];
  currentState = {
    loading: typeof raw["loading"] === "boolean" ? raw["loading"] : false,
    filter: filter === "all" || filter === "active" || filter === "completed"
      ? filter
      : "all",
    todos: Array.isArray(raw["todos"])
      ? (raw["todos"] as Todo[])
      : [
        { id: "1", title: "Create the FiberElement project", completed: true },
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
      ],
  };
  return currentState;
}

function renderPage(data: RenderState): void {
  __AppendElement(page, createText("title", "Todo List"));

  const actions = __CreateView(pageId);
  __SetClasses(actions, "actions");
  __AppendElement(
    actions,
    createButton("button button-primary", "Reload", "reloadTodos"),
  );
  __AppendElement(actions, createButton("button", "Add", "addTodo"));
  __AppendElement(
    actions,
    createButton("button button-danger", "Clear Done", "clearCompleted"),
  );
  __AppendElement(page, actions);

  summarySlot = __CreateView(pageId);
  filtersSlot = __CreateView(pageId);
  repeatSlot = __CreateView(pageId);
  __SetClasses(summarySlot, "summary-slot");
  __SetClasses(filtersSlot, "filters-slot");
  __SetClasses(repeatSlot, "todo-repeat");
  __AppendElement(page, summarySlot);
  __AppendElement(page, filtersSlot);
  __AppendElement(page, repeatSlot);

  renderState(data as Required<RenderState>);
}

function updatePage(patch: RenderState): void {
  currentState = {
    ...(currentState ?? {}),
    ...patch,
  } as Required<RenderState>;
  renderState(currentState, patch);
  __FlushElementTree();
}

function getPageData(): RenderState {
  return {};
}

Object.assign(globalThis, {
  renderPage,
  updatePage,
  getPageData,
  processData,
});
