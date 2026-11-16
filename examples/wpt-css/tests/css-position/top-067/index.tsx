/*
Source: imported/wpt-upstream/css/CSS2/positioning/top-067.xht
WPT-Revision: c18fcf34e
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: in physical units normalized to px in TTSS (1in = 96px); this is adapter-level Web parity evidence, not native Lynx in support.
Title: CSS Test: Top using inches with a nominal value, 1in
Assert: The 'top' property sets a nominal length value in inches.
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
