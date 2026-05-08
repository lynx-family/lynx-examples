import type { RawTextElementRef } from "@lynx-js/type-element-api";

const page = __CreatePage("0", 0);
const pageId = __GetElementUniqueID(page);
__SetClasses(page, "page");

let counterText: RawTextElementRef | undefined;

function createText(className: string, value: string) {
  const text = __CreateText(pageId);
  __SetClasses(text, className);
  const raw = __CreateRawText(value);
  __AppendElement(text, raw);
  return { text, raw };
}

function renderPage(data: Record<string, unknown>): void {
  const title = createText("title", "FiberElement Counter");
  __AppendElement(page, title.text);

  const button = __CreateView(pageId);
  __SetClasses(button, "button");
  __AddEvent(button, "bindEvent", "tap", "increment");
  const label = createText("button-label", "Tap to Count");
  __AppendElement(button, label.text);
  __AppendElement(page, button);

  const counter = createText("counter", String(data["count"] ?? 0));
  counterText = counter.raw;
  __AppendElement(page, counter.text);
}

function updatePage(data: Record<string, unknown>): void {
  if (!counterText) return;
  __SetAttribute(counterText, "text", String(data["count"] ?? 0));
  __FlushElementTree();
}

function getPageData(): Record<string, unknown> {
  return {};
}

function processData(
  data: Record<string, unknown>,
): Record<string, unknown> {
  return data;
}

Object.assign(globalThis, {
  renderPage,
  updatePage,
  getPageData,
  processData,
});
