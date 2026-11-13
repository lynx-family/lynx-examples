/*
Source: imported/wpt-upstream/css/css-flexbox/flex-aspect-ratio-cross-size-002.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Nested aspect-ratio flex items collapse instead of producing the Web 200x50 cross size. Diff: 2.6683% @0.5% limit (Pixel 10 58130DLCR001AF, 2026-08-27; diagnosis docs/diagnostics/flexbox-geometry-semantic-audit-20260827.md).
Title: Nested flex containers with aspect-ratio do not inflate container height through content min-size feedback
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the green strip below is 200x50 and not taller."}
</text>
<view className={"container"}>
<view className={"outer"}>
<view className={"inner"}>
<view>
<view className={"box"}>
</view>
</view>
</view>
</view>
</view>
</view>
</>);
