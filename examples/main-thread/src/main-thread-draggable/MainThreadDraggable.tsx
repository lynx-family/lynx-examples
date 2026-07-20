import type { RefObject } from "@lynx-js/react";
import type { MainThread } from "@lynx-js/types";

export function MainThreadDraggable(
  props: { size: number; "main-thread:ref"?: RefObject<MainThread.Element> },
) {
  return (
    <view
      main-thread:ref={props["main-thread:ref"]}
      style={{
        height: props.size + "px",
        width: props.size + "px",
        background: "lightskyblue",
        transform: `translate(0px, 500px)`,
      }}
    >
      <text>MTDraggable</text>
    </view>
  );
}
