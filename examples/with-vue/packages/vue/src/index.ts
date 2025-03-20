import { createRenderer, h } from "@vue/runtime-core";
import type { Component, RendererOptions } from "@vue/runtime-core";

const page = __CreatePage("0", 0);
const pageId = __GetElementUniqueID(page);

let rendererOptions: RendererOptions<FiberElement, FiberElement> = {
  patchProp(el, key, prevValue, nextValue, namespace, parentComponent) {
    if (namespace) {
      throw new Error("not supported");
    }
    if (key === "style") {
      __SetInlineStyles(el, nextValue as string);
    } else if (key === "class" || key === "className") {
      __SetClasses(el, nextValue as string);
    } else if (key === "id") {
      __SetID(el, nextValue as string);
    } else if (key.startsWith("data-")) {
      __AddDataset(el, key.slice(5), nextValue);
    } else {
      __SetAttribute(el, key, nextValue);
    }
    __FlushElementTree(el);
  },
  insert(el, parent, anchor) {
    if (anchor) {
      __InsertElementBefore(parent, el, anchor);
    } else {
      __AppendElement(parent, el);
    }
    __FlushElementTree(parent);
  },
  remove(el) {
    const parent = __GetParent(el);
    if (parent) {
      __RemoveElement(parent, el);
      __FlushElementTree(parent);
    }
  },
  createElement(type, namespace, isCustomizedBuiltIn, vnodeProps) {
    if (namespace) {
      throw new Error("not supported");
    }
    if (isCustomizedBuiltIn) {
      throw new Error("not supported");
    }

    const el = __CreateElement(type, pageId);
    for (const key in vnodeProps) {
      rendererOptions.patchProp(el, key, null, vnodeProps[key]);
    }
    return el;
  },
  createText(text) {
    return __CreateRawText(text);
  },
  createComment(_text) {
    return __CreateWrapperElement(pageId);
  },
  setText(node, text) {
    __SetAttribute(node, "text", text);
    __FlushElementTree(node);
  },
  setElementText(node, text) {
    __SetAttribute(node, "text", text);
    __FlushElementTree(node);
  },
  parentNode(node) {
    return __GetParent(node) ?? null;
  },
  nextSibling(node) {
    return __NextElement(node);
  },
  // setScopeId(node, scopeId) {
  //   const cssId = Number.parseInt(scopeId.slice(7), 16);
  //   console.log(scopeId, cssId);
  //   __SetCSSId(node, cssId);
  // },
};
const renderer = /* @__PURE__ */ createRenderer<FiberElement, FiberElement>(rendererOptions);

const { createApp } = /* @__PURE__ */ renderer;

const app = /* @__PURE__ */ createApp({
  render() {
    return h(App);
  },
});

let App: Component;
export function setRootComponent(_App: Component) {
  App = _App;
}

// @ts-ignore
globalThis.renderPage = () => {
  app.mount(page);
};
// @ts-ignore
globalThis.updatePage = () => {};
// @ts-ignore
globalThis.processData = () => {};

export * from "@vue/runtime-core";
