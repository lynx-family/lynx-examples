/*
Source: imported/wpt-upstream/css/css-flexbox/flex-flow-008.html
WPT-Revision: 617c00423837
Adapted-By: agent
Adapted-Date: 2026-07-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: flex-flow - column wrap
Assert: The 'flex-flow' property set 'column wrap' controls the flex container is multi-line
but the main axis is vertical
Note: Android screenshot pass at 0.0289% (1058 pixels) on Pixel_9_Pro emulator-5554, 2026-07-22. The property under test remains flex-flow: column wrap. Adaptation maps HTML elements to TTML, replaces the original div selector with explicit flex-item classes, restores Web content-box sizing, makes Web's flex-start main-axis default explicit, and compensates for Lynx not collapsing setup paragraph/body margins.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red, the number within square is '1 2 3 4' from left to right, top to bottom."}
</text>
<view id={"test"}>
<view className={"flex-item"}>
<text>
{"1"}
</text>
</view>
<view className={"flex-item"}>
<text>
{"3"}
</text>
</view>
<view className={"flex-item"}>
<text>
{"2"}
</text>
</view>
<view className={"flex-item"}>
<text>
{"4"}
</text>
</view>
</view>
</view>
</>);
