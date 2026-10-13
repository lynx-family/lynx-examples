/*
Source: imported/wpt-upstream/css/css-flexbox/flex-minimum-height-flex-items-015.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Lynx does not apply Web's content-based min-height:auto lower bound after the source anchor is faithfully blockified as one structural flex item. Diff: 2.3307% @0.5% limit (Pixel 10 58130DLCR001AF, 2026-08-27; diagnosis docs/diagnostics/flexbox-geometry-semantic-audit-20260827.md).
Title: CSS Flexbox: min-height: auto with nested flexboxes and percentages
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
<view className={"overlapped-green"}>
</view>
<view className={"outer"}>
<view className={"inner"}>
<view className={"flex-item"}>
<view className={"inside-of-item"}>
</view>
</view>
</view>
</view>
</view>
</>);
