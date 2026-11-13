/*
Source: imported/wpt-upstream/css/css-flexbox/flex-minimum-height-flex-items-013.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Nested column flex items do not retain Web's content-based min-height:auto lower bound. Diff: 2.6749% @0.5% limit (Pixel 10 58130DLCR001AF, 2026-08-27; diagnosis docs/diagnostics/flexbox-geometry-semantic-audit-20260827.md).
Title: CSS Flexbox: min-height: auto with nested flexboxes
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
<view className={"outer"}>
<view className={"middle"}>
<view className={"inner"}>
<view className={"tall"}>
</view>
</view>
</view>
</view>
</view>
</>);
