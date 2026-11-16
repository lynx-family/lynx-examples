/*
Source: imported/wpt-upstream/css/css-flexbox/flex-minimum-width-flex-items-005.xht
WPT-Revision: 269bca0dd35c303639f3c9cf1d8bcb3d911bdb60
Adapted-By: agent
Adapted-Date: 2026-09-20
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Lynx uses a zero automatic min-width instead of Web's 100px specified-size suggestion, shrinking the 200px intrinsic image into the 10px flex container. Diff: 2.0753% @0.5% limit (emulator-5554, 2026-09-20; diagnosis docs/diagnostics/flex-minimum-width-flex-items-005-20260920.md).
Title: CSS Flexible Box Test: Minimum width of flex items
Assert: Checks that automatic minimum width for flex items is the specified size suggestion, when that is the smallest of the available suggestions.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view id={"reference-overlapped-red"}>
</view>
<view id={"constrained-flex"}>
<image id={"test-flex-item-overlapping-green"} src={"support/200x200-green.png"} auto-size={true} />
</view>
</view>
</>);
