/*
Source: imported/wpt-upstream/css/css-color/t422-rgba-clip-outside-device-gamut-b.xht
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Test: rgba() clipping outside device gamut
Assert: Test clipping of rgba() values outside the device gamut.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"WARNING: This test assumes that the device gamut is sRGB"}
</text>
<text className={"__ua-p"}>
{"\t(as it will be for many CRT monitors)."}
</text>
<text className={"__ua-p"}>
{"Every row in this table should have both columns the same color:"}
</text>
<view className={"matrix-table"}>
<view className={"matrix-row"}>
<view className={"matrix-cell matrix-header __inline-001"}>
<text>
{"Column 1"}
</text>
</view>
<view className={"matrix-cell matrix-header __inline-002"}>
<text>
{"Column 2"}
</text>
</view>
</view>
<view className={"matrix-row"}>
<view className={"matrix-cell __inline-003"}>
</view>
<view className={"matrix-cell __inline-004"}>
</view>
</view>
<view className={"matrix-row"}>
<view className={"matrix-cell __inline-005"}>
</view>
<view className={"matrix-cell __inline-006"}>
</view>
</view>
<view className={"matrix-row"}>
<view className={"matrix-cell __inline-007"}>
</view>
<view className={"matrix-cell __inline-008"}>
</view>
</view>
<view className={"matrix-row"}>
<view className={"matrix-cell __inline-009"}>
</view>
<view className={"matrix-cell __inline-010"}>
</view>
</view>
<view className={"matrix-row"}>
<view className={"matrix-cell __inline-011"}>
</view>
<view className={"matrix-cell __inline-012"}>
</view>
</view>
<view className={"matrix-row"}>
<view className={"matrix-cell __inline-013"}>
</view>
<view className={"matrix-cell __inline-014"}>
</view>
</view>
<view className={"matrix-row"}>
<view className={"matrix-cell __inline-015"}>
</view>
<view className={"matrix-cell __inline-016"}>
</view>
</view>
<view className={"matrix-row"}>
<view className={"matrix-cell __inline-017"}>
</view>
<view className={"matrix-cell __inline-018"}>
</view>
</view>
</view>
</view>
</>);
