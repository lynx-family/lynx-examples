import type { ElementRef, RawTextElementRef } from "@lynx-js/type-element-api";

export function createMainThreadText(
  pageId: number,
  className: string,
  value: string,
): { text: ElementRef; raw: RawTextElementRef } {
  const text = __CreateText(pageId);
  __SetClasses(text, className);
  const raw = __CreateRawText(value);
  __AppendElement(text, raw);
  return { text, raw };
}
