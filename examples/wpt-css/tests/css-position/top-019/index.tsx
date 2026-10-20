/*
Source: imported/wpt-upstream/css/CSS2/positioning/top-019.xht
WPT-Revision: c18fcf34e
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: pt physical units normalized to px in TTSS (72pt = 96px); this is adapter-level Web parity evidence, not native Lynx pt support.
Title: CSS Test: Top using points with a nominal value, 72pt
Assert: The 'top' property sets a nominal length value in points.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is no red."}
</text>
<view id={"div1"}>
<view id={"div2"}>
</view>
<view id={"div3"}>
</view>
</view>
</view>
</>);
