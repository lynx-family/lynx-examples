/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox-collapsed-item-baseline-001.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: visibility:collapse does not implement Web flex-item hiding and cross-size strut/baseline semantics. Diff: 0.6496% @0.5% limit (Pixel 10 58130DLCR001AF, 2026-08-27; diagnosis docs/diagnostics/flexbox-geometry-semantic-audit-20260827.md).
Title: CSS Test: Testing that a collapsed flex item participates in baseline alignment only for the purpose of establishing container's cross size
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
{/* Second item collapsed: */}
<view className={"flexContainer"}>
<view className={"largeFont"}>
<text>
{"a"}
</text>
</view>
<view className={"smallFont collapse"}>
<text>
{"b"}
</text>
</view>
</view>
{/* First item collapsed: */}
<view className={"flexContainer"}>
<view className={"largeFont collapse"}>
<text>
{"a"}
</text>
</view>
<view className={"smallFont"}>
<text>
{"b"}
</text>
</view>
</view>
</view>
</>);
