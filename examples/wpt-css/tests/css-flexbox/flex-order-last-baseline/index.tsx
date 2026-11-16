/*
Source: imported/wpt-upstream/css/css-flexbox/flex-order-last-baseline.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Lynx does not support the two-token align-items:last baseline value, so the reordered B item does not supply the requested last baseline. Diff: 1.6599% @0.5% limit (Pixel 10 58130DLCR001AF, 2026-08-27; diagnosis docs/diagnostics/flexbox-geometry-semantic-audit-20260827.md).
Title: CSS Test: flex last baseline with order property
Assert: The last baseline of a flex container should come from the last item in order, not the first.
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
