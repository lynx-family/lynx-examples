import { describe, expect, it } from "@rstest/core";

import { startBackground } from "../runtime/background.js";
import { startMainThread } from "../runtime/main-thread.js";
import type { ComponentDefinition } from "../runtime/types.js";

interface FrameworkEvent {
  data?: unknown;
  type: string;
}

type Listener = (event: FrameworkEvent) => void;

class FakeContext {
  peer?: FakeContext;
  readonly #listeners = new Map<string, Set<Listener>>();

  addEventListener(type: string, listener: Listener): void {
    const listeners = this.#listeners.get(type) ?? new Set();
    listeners.add(listener);
    this.#listeners.set(type, listeners);
  }

  dispatchEvent(event: FrameworkEvent): number {
    this.peer?.emit(event);
    return 0;
  }

  emit(event: FrameworkEvent): void {
    for (const listener of this.#listeners.get(event.type) ?? []) listener(event);
  }

  listenerCount(): number {
    return [...this.#listeners.values()].reduce(
      (total, listeners) => total + listeners.size,
      0,
    );
  }

  removeEventListener(type: string, listener: Listener): void {
    this.#listeners.get(type)?.delete(listener);
  }
}

interface MockElement {
  attributes: Record<string, unknown>;
  children: MockElement[];
  classes?: string;
  id?: string;
  listeners: Map<string, Set<Listener>>;
  text?: string;
  uniqueId: number;
}

function createElement(uniqueId: number, text?: string): MockElement {
  return {
    attributes: {},
    children: [],
    listeners: new Map(),
    text,
    uniqueId,
  };
}

const component: ComponentDefinition = {
  events: [{ name: "tap", node: "title", task: "refreshGreeting" }],
  nodes: [{
    children: [{
      className: "greeting-title",
      id: "title",
      type: "text",
      value: "title",
    }],
    className: "greeting-content",
    id: "content",
    type: "view",
  }],
  screenName: "Greeting",
  state: {
    title: { initialValue: "Hello World", name: "title" },
  },
  styles: [],
  tasks: [{
    action: { arguments: [], name: "fetchGreeting" },
    name: "refreshGreeting",
    target: "title",
  }],
};

describe("custom framework runtime", () => {
  it("runs lifecycle, host updates, cross-thread tasks, patches, and cleanup", async () => {
    const engine = new FakeContext();
    const mainEndpoint = new FakeContext();
    const backgroundEndpoint = new FakeContext();
    mainEndpoint.peer = backgroundEndpoint;
    backgroundEndpoint.peer = mainEndpoint;

    let elementId = 0;
    let flushCount = 0;
    let page: MockElement | undefined;
    const errors: Error[] = [];
    Object.assign(globalThis, {
      __AddEventListener(
        node: MockElement,
        name: string,
        callback: Listener,
      ): void {
        const listeners = node.listeners.get(name) ?? new Set();
        listeners.add(callback);
        node.listeners.set(name, listeners);
      },
      __AppendElement(parent: MockElement, child: MockElement): MockElement {
        parent.children.push(child);
        return child;
      },
      __CreatePage(): MockElement {
        page = createElement(++elementId);
        return page;
      },
      __CreateRawText(text: string): MockElement {
        return createElement(++elementId, text);
      },
      __CreateText(): MockElement {
        return createElement(++elementId);
      },
      __CreateView(): MockElement {
        return createElement(++elementId);
      },
      __FlushElementTree(): void {
        flushCount += 1;
      },
      __GetElementUniqueID(node: MockElement): number {
        return node.uniqueId;
      },
      __RemoveEventListener(
        node: MockElement,
        name: string,
        callback: Listener,
      ): void {
        node.listeners.get(name)?.delete(callback);
      },
      __SetAttribute(node: MockElement, name: string, value: unknown): void {
        node.attributes[name] = value;
      },
      __SetClasses(node: MockElement, classes: string): void {
        node.classes = classes;
      },
      __SetID(node: MockElement, id: string): void {
        node.id = id;
      },
      lynx: {
        getCoreContext: () => backgroundEndpoint,
        getEngine: () => engine,
        getJSContext: () => mainEndpoint,
        reportError(error: Error): void {
          errors.push(error);
        },
      },
    });

    startBackground(component, {
      async fetchGreeting() {
        return "Hello Lynx";
      },
    });
    startMainThread(component);
    engine.emit({ data: [{}], type: "__RenderPage" });

    expect(page?.classes).toBeUndefined();
    const container = page?.children[0];
    expect(container?.classes).toBe("greeting-content");
    expect(container?.id).toBe("content");
    const title = container?.children[0];
    const rawText = title?.children[0];
    expect(title?.id).toBe("title");
    expect(rawText?.text).toBe("Hello World");

    engine.emit({ data: [{ title: "Hello from host" }], type: "__UpdatePage" });
    expect(rawText?.attributes["text"]).toBe("Hello from host");
    expect(flushCount).toBe(1);

    for (const listener of title?.listeners.get("tap") ?? []) {
      listener({ type: "tap" });
    }
    await Promise.resolve();
    await Promise.resolve();
    expect(rawText?.attributes["text"]).toBe("Hello Lynx");
    expect(flushCount).toBe(2);
    expect(errors).toEqual([]);

    engine.emit({ type: "__DestroyLifetime" });
    expect(engine.listenerCount()).toBe(0);
    expect(mainEndpoint.listenerCount()).toBe(0);
    expect(backgroundEndpoint.listenerCount()).toBe(0);
    expect(title?.listeners.get("tap")?.size).toBe(0);
  });
});
