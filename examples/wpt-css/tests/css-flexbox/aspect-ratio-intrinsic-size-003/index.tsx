/*
Source: imported/wpt-upstream/css/css-flexbox/aspect-ratio-intrinsic-size-003.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Lynx Flexbox has no inline-flex formatting context. The adapter's display:flex plus width:fit-content approximation cannot reproduce this empty item's inline-flex intrinsic sizing through aspect-ratio. Diff: 2.72% @0.5% limit (Pixel 10 58130DLCR001AF, 2026-08-27; diagnosis docs/diagnostics/flexbox-geometry-semantic-audit-20260827.md).
Assert: This checks that an element with an aspect-ratio transfers its size when it also has stretch alignment.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square."}
</text>
<view className={"__inline-001"}>
<view className={"__inline-002"}>
</view>
</view>
</view>
</>);
