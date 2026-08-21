import type { RawTextElementRef } from "@lynx-js/type-element-api";
import type { MessageEvent } from "@lynx-js/types";

const renderPageEventName = "__RenderPage";
const updatePageEventName = "__UpdatePage";
const destroyLifetimeEventName = "__DestroyLifetime";

const engine = lynx.getEngine();
engine.addEventListener(renderPageEventName, onRenderPage);
engine.addEventListener(updatePageEventName, onUpdatePage);
engine.addEventListener(destroyLifetimeEventName, clearPage);

const page = __CreatePage("0", 0);
const pageId = __GetElementUniqueID(page);
__SetClasses(page, "page");

let titleText: RawTextElementRef | undefined;

function renderPage(data: Record<string, unknown>): void {
  const container = __CreateView(pageId);
  __SetClasses(container, "container");
  const title = __CreateText(pageId);
  __SetClasses(title, "title");
  titleText = __CreateRawText(data.title as string ?? "Hello Lynx");
  __AppendElement(title, titleText);
  __AppendElement(container, title);
  __AppendElement(page, container);
}

function updatePage(data: Record<string, unknown>): void {
  const title = data.title as string;
  if (title === undefined || titleText === undefined) return;
  __SetAttribute(titleText, "text", title);
  __FlushElementTree();
}

function onRenderPage(event: MessageEvent): void {
  const [data] = event.data;
  renderPage(data as Record<string, unknown>);
}

function onUpdatePage(event: MessageEvent): void {
  const [data] = event.data;
  updatePage(data as Record<string, unknown>);
}

function clearPage(): void {
  engine.removeEventListener(renderPageEventName, onRenderPage);
  engine.removeEventListener(updatePageEventName, onUpdatePage);
  engine.removeEventListener(destroyLifetimeEventName, clearPage);
  titleText = undefined;
}

// TODO: remove in future version
Object.assign(globalThis, {
  processData: (data: unknown): unknown => data,
});
