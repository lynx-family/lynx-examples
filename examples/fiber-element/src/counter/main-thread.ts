import type { RawTextElementRef } from "@lynx-js/type-element-api";

import { setupMainThread } from "../common/main-thread/setup.js";
import { createMainThreadText } from "../common/main-thread/text.js";

let count = 0;
setupMainThread(({ page, pageId }) => {
  let counterText: RawTextElementRef | undefined;

  function renderPage(data: Record<string, unknown>): void {
    const title = createMainThreadText(pageId, "title", "FiberElement Counter");
    __AppendElement(page, title.text);

    const button = __CreateView(pageId);
    __SetClasses(button, "button");
    __AddEvent(button, "bindEvent", "tap", "increment");
    const label = createMainThreadText(pageId, "button-label", "Tap to Count");
    __AppendElement(button, label.text);
    __AppendElement(page, button);

    const counter = createMainThreadText(
      pageId,
      "counter",
      String(data["count"]),
    );
    counterText = counter.raw;
    __AppendElement(page, counter.text);
  }

  function updatePage(data: Record<string, unknown>): void {
    if (!counterText) return;
    __SetAttribute(counterText, "text", String(data["count"] ?? 0));
    __FlushElementTree();
  }

  function processData(
    data: Record<string, unknown>,
  ): Record<string, unknown> {
    return {
      count,
    };
  }

  return {
    renderPage,
    updatePage,
    processData,
  };
});
