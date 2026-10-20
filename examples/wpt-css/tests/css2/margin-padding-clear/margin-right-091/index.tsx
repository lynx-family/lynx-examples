/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/margin-right-091.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: ex unit unsupported in Lynx; converted to px (1ex→10px, 7.5ex→75px, 8.5ex→85px). direction:rtl unsupported in Lynx; simulated via absolute positioning (right: 0) with margin-right, negative margin-right for overlap. height: 1in converted to 96px. Ahem font reference removed. Added * { box-sizing: content-box; }.
Title: CSS Test: Margin-right using 'ex' units with a nominal value, 7.5ex
Assert: The 'margin-right' property sets a nominal length value in 'ex' units.
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
<view id={"div2"}>
</view>
</view>
</view>
</view>
</>);
