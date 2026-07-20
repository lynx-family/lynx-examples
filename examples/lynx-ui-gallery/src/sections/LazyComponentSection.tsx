import { useState } from "@lynx-js/react";

import { LazyComponent } from "@lynx-js/lynx-ui";
import { Button } from "@lynx-js/lynx-ui";

export function LazyComponentSection() {
  const [showHeavy, setShowHeavy] = useState(false);

  return (
    <view className="section">
      <text className="section-title">LazyComponent</text>
      <view className="section-content">
        <text className="row-label">
          Defers rendering until visibility threshold is met
        </text>
        <Button
          className="gallery-button"
          onClick={() => setShowHeavy(!showHeavy)}
        >
          <view className="btn">
            <text className="btn-text">
              {showHeavy ? "Hide" : "Show"} Lazy Content
            </text>
          </view>
        </Button>
        {showHeavy && (
          <LazyComponent
            pid="gallery-lazy"
            scene="demo"
            estimatedStyle={{ height: 80 }}
          >
            <view className="lazy-content">
              <text className="lazy-text">
                This content was lazily loaded!
              </text>
            </view>
          </LazyComponent>
        )}
      </view>
    </view>
  );
}
