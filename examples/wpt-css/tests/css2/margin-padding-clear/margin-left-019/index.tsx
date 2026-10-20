/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/margin-left-019.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-20
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Margin-left using points with a nominal value, 72pt
Assert: The 'margin-left' property sets a nominal length value in points.
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
