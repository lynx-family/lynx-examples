import { useState } from "@lynx-js/react";

import { PopoverContent, PopoverPositioner, PopoverRoot, PopoverTrigger } from "@lynx-js/lynx-ui";

export function PopoverSection() {
  const [show, setShow] = useState(false);

  return (
    <view className="section">
      <text className="section-title">Popover</text>
      <view className="section-content">
        <PopoverRoot
          show={show}
          onVisibleChange={(visible: boolean) => setShow(visible)}
        >
          <PopoverTrigger className="popover-trigger">
            <view className="btn">
              <text className="btn-text">Tap for Popover</text>
            </view>
            <PopoverPositioner
              placement="bottom"
              placementOffset={8}
              className="popover-positioner"
            >
              <PopoverContent className="popover-content">
                <view className="popover-body">
                  <text className="popover-text">
                    This popover is anchored to the trigger button above.
                  </text>
                </view>
              </PopoverContent>
            </PopoverPositioner>
          </PopoverTrigger>
        </PopoverRoot>
      </view>
    </view>
  );
}
