/*
Source: imported/wpt-upstream/css/CSS2/positioning/bottom-007.xht
WPT-Revision: b2be13960
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Bottom using pixels with a nominal value, 96px
Assert: The 'bottom' property sets a nominal length value in pixels.
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
</view>
</view>
</>);
