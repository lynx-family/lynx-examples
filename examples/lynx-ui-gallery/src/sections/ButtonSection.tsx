import { useState } from "@lynx-js/react";

import { Button } from "@lynx-js/lynx-ui";

export function ButtonSection() {
  const [count, setCount] = useState(0);

  return (
    <view className="section">
      <text className="section-title">Button</text>
      <view className="section-content">
        <Button className="gallery-button" onClick={() => setCount((c) => c + 1)}>
          {({ active = false }) => (
            <view className={`btn ${active ? "btn-active" : ""}`}>
              <text className="btn-text">Tap Count: {count}</text>
            </view>
          )}
        </Button>

        <Button className="gallery-button" disabled>
          <view className="btn btn-disabled">
            <text className="btn-text">Disabled</text>
          </view>
        </Button>
      </view>
    </view>
  );
}
