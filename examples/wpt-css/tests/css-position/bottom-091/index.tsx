/*
Source: imported/wpt-upstream/css/CSS2/positioning/bottom-091.xht
WPT-Revision: b2be13960
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: skipped
Lynx-Unsupported-Reason: CSS ex unit is not supported by Lynx; this WPT case tests bottom with 6ex and must not be counted as passing px evidence.
Title: CSS Test: Bottom using 'ex' units with a nominal value, 6ex
Assert: The 'bottom' property sets a nominal length value in 'ex' units.
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
