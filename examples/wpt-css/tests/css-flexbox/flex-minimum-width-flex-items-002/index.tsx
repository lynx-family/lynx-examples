/*
Source: imported/wpt-upstream/css/css-flexbox/flex-minimum-width-flex-items-002.xht
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Lynx does not apply Web's content-based min-width:auto lower bound, so the flex item shrinks below its 200px descendant. Diff: 2.5659% @0.5% limit (Pixel 10 58130DLCR001AF, 2026-08-27; diagnosis docs/diagnostics/flexbox-geometry-semantic-audit-20260827.md).
Title: CSS Flexible Box Test: Minimum width of flex items
Assert: Checks that minimum width for flex items is the specified size if it's smaller than the min-content size.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and "}
<text className={"strong"}>
{"no red"}
</text>
{"."}
</text>
<view id={"reference-overlapped-red"}>
</view>
<view id={"constrained-flex"}>
<view id={"test-flex-item-overlapping-green"}>
<view id={"content-200x100"}>
</view>
</view>
</view>
</view>
</>);
