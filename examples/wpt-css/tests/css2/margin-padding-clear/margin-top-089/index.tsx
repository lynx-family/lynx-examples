/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/margin-top-089.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: ex unit unsupported in Lynx but value is 0ex (no effect). Ahem font reference removed.
Title: CSS Test: Margin-top using 'ex' units with a zero value, 0ex
Assert: The 'margin-top' property sets a zero length value in 'ex' units.
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
