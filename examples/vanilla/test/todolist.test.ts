import { describe, expect, it } from "@rstest/core";

const defaultTodos = [
  { id: "1", title: "Create the vanilla project", completed: true },
  { id: "2", title: "Render todos with Element PAPI", completed: false },
  { id: "3", title: "Handle tap events in background.ts", completed: false },
];

type Todo = (typeof defaultTodos)[number];

// Regression for the duplicate-id bug: `addTodo` used
// `String(data.todos?.length ?? 0 + 1)`, which parses as
// `length ?? (0 + 1)` and produced an id colliding with an existing todo,
// so toggling one row flipped both.
describe("todolist background", () => {
  it("addTodo generates a unique id and toggling only flips the tapped todo", async () => {
    lynxTestingEnv.switchToBackgroundThread();
    await import("../src/todolist/background.js");
    const { getData } = await import("../src/common/background/data.js");
    const { dispatchEventToBackgroundEventName, updateDataFromMainThreadEventName } = await import(
      "../src/common/constant.js"
    );

    const dispatchFromMainThread = (type: string, data: unknown): void => {
      lynxTestingEnv.switchToMainThread();
      lynx.getJSContext().dispatchEvent({ type, data });
      lynxTestingEnv.switchToBackgroundThread();
    };

    // First-screen data sync from the main thread.
    dispatchFromMainThread(updateDataFromMainThreadEventName, {
      todos: defaultTodos,
    });

    dispatchFromMainThread(dispatchEventToBackgroundEventName, {
      handlerName: "addTodo",
    });

    const { todos } = getData<{ todos: Todo[] }>();
    expect(todos).toHaveLength(4);
    expect(new Set(todos.map((todo) => todo.id)).size).toBe(4);

    const added = todos[3]!;
    expect(added.completed).toBe(false);

    dispatchFromMainThread(dispatchEventToBackgroundEventName, {
      handlerName: `toggle:${added.id}`,
    });

    const after = getData<{ todos: Todo[] }>().todos;
    expect(after[3]!.completed).toBe(true);
    // Only the tapped todo flipped: "1" was completed from the start.
    expect(after.filter((todo) => todo.completed).map((todo) => todo.id))
      .toEqual(["1", added.id]);
  });
});
