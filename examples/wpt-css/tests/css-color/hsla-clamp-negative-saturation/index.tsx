/*
Source: imported/wpt-upstream/css/css-color/hsla-clamp-negative-saturation.html
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-21
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Test: hsla() clamp negative saturation values
Assert: Test clamping of negative saturation values in hsla() functions.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instruction"}>
{"Every row in this table should have both columns the same color:"}
</text>
<view className={"table"}>
<view className={"row header-row"}>
<text className={"cell header column-one"}>
{"Column 1"}
</text>
<text className={"cell header column-two"}>
{"Column 2"}
</text>
</view>
<view className={"row data-row"}>
<view className={"cell swatch hsla-row-one"}>
</view>
<view className={"cell swatch expected-row-one"}>
</view>
</view>
<view className={"row data-row"}>
<view className={"cell swatch hsla-row-two"}>
</view>
<view className={"cell swatch expected-row-two"}>
</view>
</view>
</view>
</view>
</>);
