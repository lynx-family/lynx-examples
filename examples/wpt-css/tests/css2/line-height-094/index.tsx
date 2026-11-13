/*
Source: imported/wpt-upstream/css/CSS2/linebox/line-height-094.xht
WPT-Revision: af38980d2fcd74af19a226f5f651051cc15940ed
Adapted-By: agent
Adapted-Date: 2026-07-23
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0323%
Evidence: docs/evidence/todo-css-properties-20260723-ten-more-summary.tsv
Title: CSS Test: Line-height using percentages with a nominal value, 100%
Assert: The 'line-height' property sets a nominal length value in percentages.
Note: Ahem is embedded as a base64 @font-face and the font shorthand is expanded. The Web block width is explicit in Lynx linear layout; line-height: 100% remains unchanged.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the 2 small black squares have the same height."}
</text>
<view id={"div1"}>
<text id={"div2"}>
{"X"}
</text>
<view id={"div3"}>
</view>
</view>
</view>
</>);
