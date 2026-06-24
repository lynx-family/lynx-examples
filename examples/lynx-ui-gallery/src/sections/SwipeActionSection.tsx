import { useRef, useState } from "@lynx-js/react";

import { Button, SwipeAction } from "@lynx-js/lynx-ui";
import type { SwipeActionRef } from "@lynx-js/lynx-ui";

export function SwipeActionSection() {
  const swipeRef = useRef<SwipeActionRef>(null);
  const [showAction, setShowAction] = useState(false);

  return (
    <view className="section">
      <text className="section-title">SwipeAction</text>
      <view className="section-content">
        <text className="row-label">Swipe left or tap button</text>
        <view className="swipe-container">
          <SwipeAction
            className="swipe-action"
            swipeActionId="gallery-swipe"
            ref={swipeRef}
            enableSwipe={true}
            displayArea={
              <view className="swipe-display">
                <text className="swipe-display-text">Swipe me left</text>
              </view>
            }
            actionArea={
              <view className="swipe-action-area">
                <text className="swipe-action-text">Delete</text>
              </view>
            }
            onAction={(id: string) => console.log("action", id)}
          />
        </view>
        <Button
          className="gallery-button"
          onClick={() => {
            if (showAction) {
              swipeRef.current?.closeActionArea(true);
            } else {
              swipeRef.current?.showActionArea(true);
            }
            setShowAction(!showAction);
          }}
        >
          <view className="btn">
            <text className="btn-text">
              {showAction ? "Hide Action" : "Show Action"}
            </text>
          </view>
        </Button>
      </view>
    </view>
  );
}
