/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/margin-left-089.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-20
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Margin-left using 'ex' units with a zero value, 0ex
Assert: The 'margin-left' property sets a zero length value in 'ex' units.
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
<view>
</view>
</view>
</view>
</>);
