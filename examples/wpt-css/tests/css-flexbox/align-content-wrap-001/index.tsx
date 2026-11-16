/*
Source: imported/wpt-upstream/css/css-flexbox/align-content-wrap-001.html
WPT-Revision: dd432b1d351796d3f25e1d1f243ba52da16c3a0a
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Final run 004r2 on Pixel_9_Pro emulator-5554 (2026-08-27) produced 0.6707% diff above the 0.5% threshold; writing-mode: vertical-lr and align-content: space-evenly are unsupported while the faithful card preserves both assertions. Diagnosis: results/css-flexbox-20-20260828/align-content-wrap-001/debug-report.json
Title: css-flexbox: Tests align-content with single-line flex-wrap: wrap
Assert: Align-content applies to single-line wrapping flex containers in horizontal and vertical-lr writing modes.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"log"}>
</view>
<text className={"__ua-p"}>
{"Test that we honor align-content even in single-line flex containers"}
</text>
<view className={"default __inline-001"}>
<view data-offset-y={"0"}>
<text>
{"This text should be at the top of its container"}
</text>
</view>
</view>
<view className={"default __inline-002"}>
<view data-offset-y={"50"}>
<text>
{"This text should be at the bottom of its container"}
</text>
</view>
</view>
<view className={"default __inline-003"}>
<view data-offset-y={"25"}>
<text>
{"This text should be centered in its container"}
</text>
</view>
</view>
<view className={"default __inline-004"}>
<view data-offset-y={"0"}>
<text>
{"This text should be at the top of its container"}
</text>
</view>
</view>
<view className={"default __inline-005"}>
<view data-offset-y={"25"}>
<text>
{"This text should be centered in its container"}
</text>
</view>
</view>
<view className={"default __inline-006"}>
<view data-offset-y={"25"}>
<text>
{"This text should be centered in its container"}
</text>
</view>
</view>
<view className={"default __inline-007"}>
<view data-offset-y={"0"}>
<text>
{"This text should be at the top of its container"}
</text>
</view>
</view>
<view className={"verticalWriting __inline-008"}>
<view data-offset-x={"0"}>
<text>
{"This text should be at the left of its container"}
</text>
</view>
</view>
<view className={"verticalWriting __inline-009"}>
<view data-offset-x={"50"}>
<text>
{"This text should be at the right of its container"}
</text>
</view>
</view>
<view className={"verticalWriting __inline-010"}>
<view data-offset-x={"25"}>
<text>
{"This text should be centered in its container"}
</text>
</view>
</view>
<view className={"verticalWriting __inline-011"}>
<view data-offset-x={"0"}>
<text>
{"This text should be at the left of its container"}
</text>
</view>
</view>
<view className={"verticalWriting __inline-012"}>
<view data-offset-x={"25"}>
<text>
{"This text should be centered in its container"}
</text>
</view>
</view>
<view className={"verticalWriting __inline-013"}>
<view data-offset-x={"0"}>
<text>
{"This text should be at the left of its container"}
</text>
</view>
</view>
</view>
</>);
