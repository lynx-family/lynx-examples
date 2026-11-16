/*
Source: imported/wpt-upstream/css/css-flexbox/flex-minimum-height-flex-items-014.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Nested automatic minimum height and flex-end distribution differ from Web. Diff: 2.3307% @0.5% limit (Pixel 10 58130DLCR001AF, 2026-08-27; diagnosis docs/diagnostics/flexbox-geometry-semantic-audit-20260827.md).
Title: CSS Flexbox: min-height: auto with nested flexboxes and justify-content
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
<view className={"spacer"}>
</view>
<view className={"inner"}>
<view className={"spacer"}>
</view>
</view>
</view>
</view>
</>);
