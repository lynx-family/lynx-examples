import { IntrinsicElements as _IntrinsicElements } from "@lynx-js/types";
import { JSX as _JSX } from "solid-js";

export namespace JSX {
  interface IntrinsicElements extends _IntrinsicElements {
  }

  interface IntrinsicAttributes {
    ref?: unknown | ((e: unknown) => void) | undefined;
  }

  type Element = _JSX.Element;
}
