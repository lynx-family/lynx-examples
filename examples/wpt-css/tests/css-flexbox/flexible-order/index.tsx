/*
Source: imported/wpt-upstream/css/css-flexbox/flexible-order.html
WPT-Revision: 617c00423837
Adapted-By: agent
Adapted-Date: 2026-07-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Change the value of 'order' property
Assert: The order of three should be blue-red-black
Note: Android screenshot pass at 0.0001% (2 pixels) on Pixel_9_Pro emulator-5554, 2026-07-22. The order values (-4, -2, -1) and flex shorthand remain unchanged. Adaptation maps the three HTML div flex items to explicit TTML classes, restores Web content-box sizing, makes Web's flex-start default explicit, and gives the synthetic body a resolved content width so margin: 0 auto centers the 600px flex container against the same viewport content box.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
{/* FLEX CONTAINER */}
<view className={"box"}>
<view className={"order-item red"}>
<text>
{"A"}
</text>
</view>
<view className={"order-item blue"}>
<text>
{"B"}
</text>
</view>
<view className={"order-item black"}>
<text>
{"C"}
</text>
</view>
</view>
</view>
</>);
