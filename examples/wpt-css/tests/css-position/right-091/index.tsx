/*
Source: imported/wpt-upstream/css/CSS2/positioning/right-091.xht
WPT-Revision: c18fcf34e
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: skipped
Lynx-Unsupported-Reason: CSS ex unit is not supported by Lynx; this WPT case tests right with ex units and must not be counted as passing px evidence.
Title: CSS Test: Right using 'ex' units with a nominal value, 7.5ex
Assert: The 'right' property sets a nominal length value in 'ex' units.
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
