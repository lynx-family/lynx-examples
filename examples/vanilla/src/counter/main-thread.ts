import type { RawTextElementRef } from "@lynx-js/type-element-api";

import { createPage, createText, createView } from "../common/main-thread/element.js";
import { bindMainThreadEvent } from "../common/main-thread/event.js";
import { setupMainThread } from "../common/main-thread/setup.js";

const { page, pageId } = createPage("page");

function renderPage(): void {
  let count = 0;
  let counterText: RawTextElementRef | undefined;
  const title = createText(pageId, "title", "Vanilla Counter");
  __AppendElement(page, title.text);

  const button = createView(pageId, "button");
  bindMainThreadEvent(button, "tap", () => {
    count += 1;
    if (!counterText) return;
    __SetAttribute(counterText, "text", String(count));
    __FlushElementTree();
  });
  const label = createText(pageId, "button-label", "Tap to Count");
  __AppendElement(button, label.text);
  __AppendElement(page, button);

  const counter = createText(pageId, "counter", String(count));
  counterText = counter.raw;
  __AppendElement(page, counter.text);
}

setupMainThread({
  renderPage,
}, { enableBackgroundSync: false });
