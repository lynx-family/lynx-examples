/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/margin-right-067.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: in unit unsupported in Lynx; converted to px (0.25in=24px, 1in=96px, 1.25in=120px). direction:rtl unsupported in Lynx; mirrored to LTR using margin-left (swapped border-right to border-left, positive/negative margins mirrored).
Title: CSS Test: Margin-right using inches with a nominal value, 1in
Assert: The 'margin-right' property sets a nominal length value in inches.
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
