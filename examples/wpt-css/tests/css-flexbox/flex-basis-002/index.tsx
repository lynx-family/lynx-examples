/*
Source: imported/wpt-upstream/css/css-flexbox/flex-basis-002.html
WPT-Revision: 617c00423837
Adapted-By: agent
Adapted-Date: 2026-07-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: flex-basis - positive number
Assert: The 'flex-basis' property specified correct value, the actual value of test element size is same as to the value of 'flex-basis' property, and the 'width' property is invalid.
Note: Android screenshot pass at 0.0219% (799 pixels) on Pixel_9_Pro emulator-5554, 2026-07-22. The property under test remains flex-basis: 60px. Adaptation only maps HTML elements to TTML, scopes the original div selector to explicit flex-item classes, restores Web content-box sizing, makes Web's flex-start default explicit, and compensates for Lynx not collapsing the setup paragraph/body margins.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view id={"container"}>
<view id={"test"} className={"basis-item"}>
</view>
<view id={"ref"} className={"basis-item"}>
</view>
</view>
<view id={"cover"}>
</view>
</view>
</>);
