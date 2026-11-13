/*
Source: imported/wpt-upstream/css/css-flexbox/multiline-reverse-wrap-baseline.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Wrap-reverse line placement with baseline-aligned items differs from Web after explicit source-equivalent selector repair. Diff: 5.0204% @0.5% limit (Pixel 10 58130DLCR001AF, 2026-08-27; diagnosis docs/diagnostics/flexbox-geometry-semantic-audit-20260827.md).
Title: CSS Flexbox: multiline reverse wrap baseline.
Assert: This test ensures that 'flex-wrap: wrap-reverse' flips the cross axis directions and items with baseline alignment are aligned to cross axis start.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"flexbox"}>
<view className={"first __inline-001"}>
<text>
{"first"}
</text>
<text>
{"first"}
</text>
<text>
{"first"}
</text>
</view>
<view className={"second __inline-002"}>
<text>
{"second"}
</text>
</view>
<view className={"third __inline-003"}>
<text>
{"third"}
</text>
</view>
<view className={"fourth __inline-004"}>
<text>
{"fourth"}
</text>
<text>
{"fourth"}
</text>
</view>
</view>
<view className={"flexbox"}>
<view className={"first __inline-005"}>
<text>
{"first"}
</text>
<text>
{"first"}
</text>
<text>
{"first"}
</text>
</view>
<view className={"second __inline-006"}>
<text>
{"second"}
</text>
</view>
<view className={"third __inline-007"}>
<text>
{"third"}
</text>
</view>
<view className={"fourth __inline-008"}>
<text>
{"fourth"}
</text>
<text>
{"fourth"}
</text>
</view>
</view>
<view className={"flexbox __inline-009"}>
<view className={"first __inline-010"}>
<text>
{"first"}
</text>
</view>
<view className={"second __inline-011"}>
<text>
{"second"}
</text>
</view>
<view className={"third __inline-012"}>
<text>
{"third"}
</text>
<text>
{"third"}
</text>
</view>
</view>
</view>
</>);
