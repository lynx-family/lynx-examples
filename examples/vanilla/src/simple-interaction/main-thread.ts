import type { RawTextElementRef, TextElementRef } from "@lynx-js/type-element-api";

const engine = lynx.getEngine();
const page = __CreatePage("0", 0);
const pageId = __GetElementUniqueID(page);
__SetClasses(page, "page");

let title: TextElementRef | undefined;
let titleText: RawTextElementRef | undefined;
let titleTapHandler: (() => void) | undefined;

function renderPage(): void {
  const [titleValue, setTitle] = useState("Hello World");
  title = __CreateText(pageId);
  __SetClasses(title, "title");
  titleText = __CreateRawText(titleValue);
  __AppendElement(title, titleText);
  __AppendElement(page, title);

  titleTapHandler = function(): void {
    setTitle("Hello Lynx");
  };
  __AddEventListener(title, "tap", titleTapHandler, {});
}

function useState(initialValue: string) {
  let value = initialValue;
  const setValue = function(nextValue: string): void {
    value = nextValue;
    updatePage({ title: value });
  };
  return [value, setValue] as const;
}

function updatePage(data: { title: string }): void {
  if (titleText === undefined) return;
  __SetAttribute(titleText, "text", data.title);
  __FlushElementTree();
}

function onRenderPage(): void {
  renderPage();
}

function clearPage(): void {
  if (title !== undefined && titleTapHandler !== undefined) {
    __RemoveEventListener(
      title,
      "tap",
      titleTapHandler,
      {},
    );
  }
  engine.removeEventListener(renderPageEventName, onRenderPage);
  engine.removeEventListener(destroyLifetimeEventName, clearPage);
  title = undefined;
  titleText = undefined;
  titleTapHandler = undefined;
}

const renderPageEventName = "__RenderPage";
const destroyLifetimeEventName = "__DestroyLifetime";

engine.addEventListener(renderPageEventName, onRenderPage);
engine.addEventListener(destroyLifetimeEventName, clearPage);

// TODO: remove in future version
Object.assign(globalThis, {
  processData: (data: unknown): unknown => data,
});
