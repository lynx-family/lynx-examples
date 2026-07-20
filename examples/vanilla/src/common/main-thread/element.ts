import type {
  ElementRef,
  PageElementRef,
  RawTextElementRef,
  TextElementRef,
  ViewElementRef,
} from "@lynx-js/type-element-api";

import { clearNodesEvents } from "./event.js";

type PageElement = {
  page: PageElementRef;
  pageId: number;
};

type TextWithRaw = {
  text: TextElementRef;
  raw: RawTextElementRef;
};

export function createPage(className: string): PageElement {
  const page = __CreatePage("0", 0);
  const pageId = __GetElementUniqueID(page);
  __SetClasses(page, className);
  return { page, pageId };
}

export function createText(
  pageId: number,
  className: string,
  value: string,
): TextWithRaw {
  const text = __CreateText(pageId);
  __SetClasses(text, className);
  const raw = __CreateRawText(value);
  __AppendElement(text, raw);
  return { text, raw };
}

export function createView(
  pageId: number,
  className: string,
): ViewElementRef {
  const view = __CreateView(pageId);
  __SetClasses(view, className);
  return view;
}

function getRemovedChildren(
  previousChildren: ElementRef[],
  nextChildren: ElementRef[],
): ElementRef[] {
  const matchedNextIndexes = new Set<number>();
  return previousChildren.filter((child) => {
    const nextIndex = nextChildren.findIndex((nextChild, index) =>
      !matchedNextIndexes.has(index) && __ElementIsEqual(child, nextChild)
    );
    if (nextIndex < 0) return true;
    matchedNextIndexes.add(nextIndex);
    return false;
  });
}

export function replaceChildren(
  parent: ElementRef,
  nextChildren: ElementRef[],
): void {
  const previousChildren = __GetChildren(parent);
  const removedChildren = getRemovedChildren(previousChildren, nextChildren);
  clearNodesEvents(removedChildren);
  __ReplaceElements(parent, nextChildren, previousChildren);
}
