/*
Source: imported/wpt-upstream/css/CSS2/linebox/line-height-102.xht
WPT-Revision: 58b15ec
Adapted-By: agent
Adapted-Date: 2026-07-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Line-height using pixels with a minimum plus one value, 1
Assert: The 'line-height' property accepts a unitless number value (1); "X X" wraps to two 20px lines so the left black stripe matches the 2em-tall right black stripe.
Note: Ahem font embedded as base64 @font-face (same as tests/css-text/white-space-001). font: 20px/1 Ahem shorthand expanded. #div2 width made explicit (1em = 20px) because Lynx linear layout sizes children by content instead of filling the parent like Web block flow. line-height: 1 kept verbatim (property under test).
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the 2 vertical black stripes have the same height."}
</text>
<view id={"div1"}>
<text id={"div2"}>
{"X X"}
</text>
<view id={"div3"}>
</view>
</view>
</view>
</>);
