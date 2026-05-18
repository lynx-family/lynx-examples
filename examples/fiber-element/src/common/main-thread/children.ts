import type { ElementRef } from "@lynx-js/type-element-api";

export function replaceChildren(
  parent: ElementRef,
  nextChildren: ElementRef[],
): void {
  __ReplaceElements(parent, nextChildren, __GetChildren(parent));
}
