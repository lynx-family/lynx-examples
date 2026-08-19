import type { ElementRef, RawTextElementRef, TextElementRef } from "@lynx-js/type-element-api";
import type { MessageEvent } from "@lynx-js/types";

const renderPageEventName = "__RenderPage";
const destroyLifetimeEventName = "__DestroyLifetime";
const setTitleEventName = "SetTitle";
const patchEventName = "Patch";

// TODO: remove in future version
Object.assign(globalThis, {
  processData: (data: unknown): unknown => data,
});

const engine = lynx.getEngine();
const backgroundThread = lynx.getJSContext();
const page = __CreatePage("0", 0);
const pageId = __GetElementUniqueID(page);
const titleTapEventOptions: Record<string, unknown> = {};
const elementMap = new Map<number, ElementRef>();
__SetClasses(page, "page");

let title: TextElementRef | undefined;
let titleText: RawTextElementRef | undefined;

function setTitle(element: ElementRef, value: string): void {
  const id = __GetElementUniqueID(element);
  elementMap.set(id, element);
  backgroundThread.dispatchEvent({
    type: setTitleEventName,
    data: { id, value },
  });
}

function onTitleTap(): void {
  if (titleText === undefined) return;
  setTitle(titleText, titleText.textContent === "Hello Lynx" ? "Hello World" : "Hello Lynx");
}

function renderPage(): void {
  const card = __CreateView(pageId);
  __SetClasses(card, "card");

  title = __CreateText(pageId);
  __SetClasses(title, "title");
  __SetAttribute(title, "aria-label", "Update greeting in background");
  titleText = __CreateRawText("Hello World");
  __AppendElement(title, titleText);
  __AddEventListener(title, "tap", onTitleTap, titleTapEventOptions);

  const hint = __CreateText(pageId);
  __SetClasses(hint, "hint");
  __AppendElement(hint, __CreateRawText("Tap to update"));

  __AppendElement(card, title);
  __AppendElement(card, hint);
  __AppendElement(page, card);
}

function onPatch(event: MessageEvent): void {
  const patch = event.data;
  if (!Array.isArray(patch)) return;

  let didUpdate = false;
  for (const item of patch) {
    const [action, id, key, value] = item;
    const element = elementMap.get(id);
    if (!element) continue;
    switch (action) {
      case "__SetAttribute":
        __SetAttribute(element, key, value);
        didUpdate = true;
        break;
      default:
        break;
    }
  }

  if (didUpdate) __FlushElementTree();
}

function onRenderPage(): void {
  renderPage();
}

function clearPage(): void {
  backgroundThread.dispatchEvent({
    type: destroyLifetimeEventName,
    data: undefined,
  });
  if (title !== undefined) {
    __RemoveEventListener(
      title,
      "tap",
      onTitleTap,
      titleTapEventOptions,
    );
  }
  backgroundThread.removeEventListener(patchEventName, onPatch);
  engine.removeEventListener(renderPageEventName, onRenderPage);
  engine.removeEventListener(destroyLifetimeEventName, clearPage);
  elementMap.clear();
  title = undefined;
  titleText = undefined;
}

backgroundThread.addEventListener(patchEventName, onPatch);
engine.addEventListener(renderPageEventName, onRenderPage);
engine.addEventListener(destroyLifetimeEventName, clearPage);
