import type { RawTextElementRef } from "@lynx-js/type-element-api";

import { createPage, createText, createView } from "../common/main-thread/element.js";
import { bindBackgroundEvent } from "../common/main-thread/event.js";
import { setupMainThread } from "../common/main-thread/setup.js";

const { page, pageId } = createPage("page");

let countRaw: RawTextElementRef | undefined;

function renderPage(): void {
  const badge = createText(pageId, "badge", "PAGE B");
  __AppendElement(page, badge.text);

  const title = createText(pageId, "title", "Shared Counter");
  __AppendElement(page, title.text);

  const hint = createText(
    pageId,
    "hint",
    "one module instance, shared by every page in the group",
  );
  __AppendElement(page, hint.text);

  const counter = createText(pageId, "counter", "…");
  countRaw = counter.raw;
  __AppendElement(page, counter.text);

  const bump = createView(pageId, "button");
  bindBackgroundEvent(bump, "tap", "bump");
  __AppendElement(bump, createText(pageId, "button-label", "+1").text);
  __AppendElement(page, bump);

  const sync = createView(pageId, "button button-secondary");
  bindBackgroundEvent(sync, "tap", "sync");
  __AppendElement(
    sync,
    createText(pageId, "button-label button-label-secondary", "Sync").text,
  );
  __AppendElement(page, sync);
}

function updatePage(data: Record<string, unknown>): void {
  if (!countRaw || typeof data?.["count"] === "undefined") return;
  __SetAttribute(countRaw, "text", String(data["count"]));
  __FlushElementTree();
}

setupMainThread({
  renderPage,
  updatePage,
});
