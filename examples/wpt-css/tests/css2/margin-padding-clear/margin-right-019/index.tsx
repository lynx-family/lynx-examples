/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/margin-right-019.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Margin-right using points with a nominal value, 72pt
Assert: The 'margin-right' property sets a nominal length value in points.
Note: Lynx does not support direction: rtl. Mirrored to LTR by swapping right→left properties.
Note: pt units converted to px (6pt→8px, 72pt→96px, 78pt→104px).
Note: 1in converted to 96px.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is "}
<text>
{"no red"}
</text>
{"."}
</text>
<view id={"wrapper"}>
<view id={"div1"}>
<view id={"div2"}>
</view>
</view>
</view>
</view>
</>);
