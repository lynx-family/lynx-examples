/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/margin-bottom-091.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-20
Reference-Mode: web-test-render
Lynx-Status: skipped
Lynx-Unsupported-Reason: CSS ex unit is not supported by Lynx; this WPT case tests margin-bottom with 7.5ex and must not be counted as passing px evidence.
Title: CSS Test: Margin-bottom using 'ex' units with a nominal value, 7.5ex
Assert: The 'margin-bottom' property sets a nominal length value in 'ex' units.
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
</view>
<view id={"div2"}>
</view>
</view>
</view>
</>);
