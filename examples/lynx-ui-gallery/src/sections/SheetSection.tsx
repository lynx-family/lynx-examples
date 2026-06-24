import { useRef } from "@lynx-js/react";

import { SheetBackdrop, SheetContent, SheetHandle, SheetRoot, SheetView } from "@lynx-js/lynx-ui";
import type { SheetRootRef } from "@lynx-js/lynx-ui";

import { Button } from "@lynx-js/lynx-ui";

export function SheetSection() {
  const sheetRef = useRef<SheetRootRef>(null);

  return (
    <view className="section">
      <text className="section-title">Sheet</text>
      <view className="section-content">
        <Button className="gallery-button" onClick={() => sheetRef.current?.open()}>
          <view className="btn">
            <text className="btn-text">Open Bottom Sheet</text>
          </view>
        </Button>

        <SheetRoot
          ref={sheetRef}
          snapPoints={["40%", "80%"]}
          initialSnap={0}
        >
          <SheetView className="sheet-viewport">
            <SheetBackdrop className="sheet-backdrop" />
            <SheetContent
              className="sheet-content"
              innerClassName="sheet-inner-content"
            >
              <SheetHandle className="sheet-handle" />
              <view className="sheet-body">
                <text className="dialog-title">Bottom Sheet</text>
                <text className="dialog-desc">
                  Drag to expand or swipe down to close. Supports multiple snap points at 40% and 80%.
                </text>
                <Button
                  className="gallery-button"
                  onClick={() => sheetRef.current?.close()}
                >
                  <view className="btn">
                    <text className="btn-text">Close</text>
                  </view>
                </Button>
              </view>
            </SheetContent>
          </SheetView>
        </SheetRoot>
      </view>
    </view>
  );
}
