/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/margin-bottom-089.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-20
Reference-Mode: web-test-render
Lynx-Status: skipped
Lynx-Unsupported-Reason: CSS ex unit is not supported by Lynx; a zero ex margin is visually indistinguishable from an ignored invalid value, so this case is not valid ex support evidence.
Title: CSS Test: Margin-bottom using 'ex' units with a zero value, 0ex
Assert: The 'margin-bottom' property sets a zero length value in 'ex' units.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is "}
<text>
{"no space between"}
</text>
{" the blue and orange lines."}
</text>
<view id={"div1"}>
</view>
<view id={"div2"}>
</view>
</view>
</>);
