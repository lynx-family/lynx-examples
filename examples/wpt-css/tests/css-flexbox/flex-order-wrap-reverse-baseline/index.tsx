/*
Source: imported/wpt-upstream/css/css-flexbox/flex-order-wrap-reverse-baseline.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Container baseline selection does not use the visual first line under wrap-reverse. Diff: 1.4986% @0.5% limit (Pixel 10 58130DLCR001AF, 2026-08-27; diagnosis docs/diagnostics/flexbox-geometry-semantic-audit-20260827.md).
Title: CSS Test: flex first baseline with wrap-reverse and order property
Assert: With wrap-reverse, the first baseline should come from the visually first line (logically last), iterating order values in reverse.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if \"Ref\" is aligned to the baseline of \"B\" (the large green text)."}
</text>
<view className={"outer"}>
<view className={"flex"}>
<view className={"a"}>
<text>
{"A"}
</text>
</view>
<view className={"b"}>
<text>
{"B"}
</text>
</view>
</view>
<view>
<text>
{"Ref"}
</text>
</view>
</view>
</view>
</>);
