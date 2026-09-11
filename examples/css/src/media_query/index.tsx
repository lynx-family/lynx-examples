import { root } from "@lynx-js/react";

import "./index.scss";

function MediaQueryDemo() {
  return (
    <view className="media-query-demo">
      <view className="media-query-demo__header">
        <text className="media-query-demo__eyebrow">CSS MEDIA QUERY</text>
        <text className="media-query-demo__title">Portrait breakpoints</text>
        <text className="media-query-demo__description">
          Use viewport width and height to apply responsive styles without rotating the device.
        </text>
      </view>

      <view className="media-query-demo__status">
        <view className="media-query-demo__status-row">
          <view className="media-query-demo__indicator" />
          <view className="media-query-demo__narrow">
            <text>Narrow portrait: under 360px</text>
          </view>
          <view className="media-query-demo__regular">
            <text>Regular portrait: 360px to 399px</text>
          </view>
          <view className="media-query-demo__large">
            <text>Large portrait: 400px or wider</text>
          </view>
        </view>
        <view className="media-query-demo__tall">
          <text>Tall viewport: 700px or taller</text>
        </view>
        <view className="media-query-demo__density">
          <text>High-density display: 2dppx or higher</text>
        </view>
      </view>

      <view className="media-query-demo__panels">
        <view className="media-query-demo__panel">
          <text className="media-query-demo__panel-title">Width range</text>
          <text className="media-query-demo__panel-copy">
            Use a Level 4 range query to target common portrait widths.
          </text>
        </view>
        <view className="media-query-demo__panel">
          <text className="media-query-demo__panel-title">Viewport height</text>
          <text className="media-query-demo__panel-copy">
            Use min-height to reserve more space on taller screens.
          </text>
        </view>
      </view>
    </view>
  );
}

root.render(<MediaQueryDemo />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
