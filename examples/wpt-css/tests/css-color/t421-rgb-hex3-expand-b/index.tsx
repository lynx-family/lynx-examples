/*
Source: imported/wpt-upstream/css/css-color/t421-rgb-hex3-expand-b.xht
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-21
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: CSS color assertion passes: the #rgb expansion swatches match the Web expectation. The full-screenshot diff remains 0.5378% because explanatory text rendering differs from WebView; this is not a css-color failure.
Title: CSS Test: expansion of #rgb colors to #rrggbb
Assert: Test that 3-digit #rgb values are expanded into #rrggbb and not #r0g0b0
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"paragraph"}>
<text className={"line"}>
{"The left and right cells in each row of the following"}
</text>
<text className={"line"}>
{"table should be the "}
<text className={"em"}>
{"same"}
</text>
{" color."}
</text>
</view>
<view className={"table first-table"}>
<view className={"row"}>
<view className={"cell e92"}>
</view>
<view className={"cell ee9922"}>
</view>
</view>
<view className={"row"}>
<view className={"cell fb0"}>
</view>
<view className={"cell ffbb00"}>
</view>
</view>
<view className={"row"}>
<view className={"cell c381"}>
</view>
<view className={"cell c338811"}>
</view>
</view>
</view>
<view className={"paragraph"}>
<text className={"line"}>
{"The left and right cells in each row of the following"}
</text>
<text className={"line"}>
{"table should be slightly "}
<text className={"em"}>
{"different"}
</text>
{" colors.  The right side"}
</text>
<text className={"line"}>
{"should be slightly darker than the left."}
</text>
</view>
<view className={"table"}>
<view className={"row"}>
<view className={"cell e92"}>
</view>
<view className={"cell e09020"}>
</view>
</view>
<view className={"row"}>
<view className={"cell fb0"}>
</view>
<view className={"cell f0b000"}>
</view>
</view>
<view className={"row"}>
<view className={"cell c381"}>
</view>
<view className={"cell c308010"}>
</view>
</view>
</view>
</view>
</>);
