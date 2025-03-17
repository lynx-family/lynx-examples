import type { MainThread } from "@lynx-js/types";
import type { Component, JSX as _JSX } from "solid-js";
import { createRenderer } from "solid-js/universal";
import type { JSX } from "../jsx-runtime";

declare module "@lynx-js/types" {
  export interface StandardProps {
    children?: JSX.Element;
  }

  interface Lynx {
    /**
     * Select the first element matching the given CSS selector in the page.
     * @param selector - CSS Selector string.
     * @public
     */
    querySelector: (selector: string) => MainThread.Element | null;

    /**
     * Select all the elements matching the given CSS selector in the page.
     * @param selector - CSS Selector string.
     * @public
     */
    querySelectorAll: (selector: string) => MainThread.Element[];
  }
}

let page: FiberElement;
let pageId: number;
let code: () => FiberElement;

// @ts-ignore
globalThis.renderPage = function() {
  page = __CreatePage("0", 0);
  pageId = __GetElementUniqueID(page);
  _render(code, page);
};

// @ts-ignore
globalThis.updatePage = function() {};
// @ts-ignore
globalThis.processData = function() {};
// @ts-ignore
globalThis.runWorklet = function(value, params) {
  if (typeof value === "function") {
    value(...params);
  }
};

export const setRootComponent = (c: () => _JSX.Element) => {
  // @ts-expect-error
  code = () => createComponent(c, {});
};

const eventRegExp = /^(bind|catch|capture-bind|capture-catch|global-bind)([A-Za-z]+)$/;
const eventTypeMap: Record<string, string> = {
  bind: "bindEvent",
  catch: "catchEvent",
  "capture-bind": "capture-bind",
  "capture-catch": "capture-catch",
  "global-bind": "global-bindEvent",
};

export const {
  render: _render,
  effect,
  memo,
  createComponent,
  createElement,
  createTextNode,
  insertNode,
  insert,
  spread,
  setProp,
  mergeProps,
} = createRenderer({
  createElement(tag) {
    return __CreateElement(tag, pageId!);
  },
  createTextNode(value) {
    return __CreateRawText(value);
  },
  replaceText(textNode, value) {
    __SetAttribute(textNode, "text", value);
    __FlushElementTree(textNode);
  },
  setProperty(node, name, value, _prev) {
    let hasMainThreadPrefix = false;
    if (name.startsWith("main-thread:")) {
      hasMainThreadPrefix = true;
      name = name.slice(12);
    }
    let match: RegExpMatchArray | null = null;
    if (name === "style") {
      __SetInlineStyles(node, value as string);
    } else if (name === "class" || name === "className") {
      __SetClasses(node, value as string);
    } else if (name === "id") {
      __SetID(node, value as string);
    } else if (name.startsWith("data-")) {
      __AddDataset(node, name.slice(5), value);
    } else if ((match = name.match(eventRegExp))) {
      const eventType = eventTypeMap[match[1]!]!;
      const eventName = match[2]!;
      if (hasMainThreadPrefix) {
        __AddEvent(node, eventType, eventName, {
          type: "worklet",
          value,
        });
      } else {
        lynx.reportError("Event binding is only supported with main-thread prefix");
        // __AddEvent(node, eventType, eventName, value as string);
      }
    } else {
      __SetAttribute(node, name, value);
    }

    __FlushElementTree(node);
  },
  insertNode(parent, node, anchor) {
    __InsertElementBefore(parent, node, anchor);
    __FlushElementTree(parent);
  },
  isTextNode(node) {
    return __GetTag(node) === "raw-text";
  },
  removeNode(parent, node) {
    __RemoveElement(parent, node);
    __FlushElementTree(parent);
  },
  getParentNode(node) {
    return __GetParent(node);
  },
  getFirstChild(node) {
    return __FirstElement(node);
  },
  getNextSibling(node) {
    return __NextElement(node);
  },
});

export { ErrorBoundary, For, Index, Match, Show, Suspense, SuspenseList, Switch } from "solid-js";

export * from "solid-js";
