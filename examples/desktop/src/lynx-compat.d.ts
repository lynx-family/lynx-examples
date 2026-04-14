import type { MouseEvent } from "@lynx-js/types";

declare module "@lynx-js/types" {
  interface StandardProps {
    // FIXME: remove after upgrading to a published @lynx-js/types version
    // that includes bindmouseleave.
    bindmouseleave?: (event: MouseEvent) => void;
    draggable?: boolean;
  }
}
