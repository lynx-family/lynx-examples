/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/margin-top-091.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: ex unit unsupported in Lynx; converted to px assuming Ahem x-height = 0.5em (1ex = 10px at 20px font). Ahem font reference removed.
Title: CSS Test: Margin-top using 'ex' units with a nominal value, 7.5ex
Assert: The 'margin-top' property sets a nominal length value in 'ex' units.
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
<view id={"div1"}>
</view>
<view id={"div2"}>
</view>
</view>
</>);
