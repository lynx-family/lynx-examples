import type { ElementRef } from "@lynx-js/type-element-api";

import { createMainThreadText } from "./text.js";

export function createMainThreadButton(
  pageId: number,
  className: string,
  label: string,
  handlerName: string,
): ElementRef {
  const button = __CreateView(pageId);
  __SetClasses(button, className);
  __AddEvent(button, "bindEvent", "tap", handlerName);
  __AppendElement(
    button,
    createMainThreadText(pageId, "button-label", label).text,
  );
  return button;
}
