import { IntrinsicElements as _IntrinsicElements } from "@lynx-js/types";

export namespace JSX {
  interface IntrinsicElements extends _IntrinsicElements {
  }

  interface IntrinsicAttributes {
    ref?: unknown | ((e: unknown) => void) | undefined;
  }
}
