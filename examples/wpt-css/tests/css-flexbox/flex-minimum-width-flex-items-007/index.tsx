/*
Source: imported/wpt-upstream/css/css-flexbox/flex-minimum-width-flex-items-007.xht
WPT-Revision: 269bca0dd35c303639f3c9cf1d8bcb3d911bdb60
Adapted-By: agent
Adapted-Date: 2026-09-20
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Lynx does not transfer the explicit 100px height through the image's 1:1 intrinsic ratio into a 100px automatic min-width, producing a 10x100 strip. Diff: 1.9113% @0.5% limit (emulator-5554, 2026-09-20; diagnosis docs/diagnostics/flex-minimum-width-flex-items-007-20260920.md).
Title: CSS Flexible Box Test: Minimum width of flex items
Assert: Checks that minimum width for flex items is the transferred size, as the min-content size of the image corresponds to that.
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
<image id={"test-flex-item-overlapping-green"} src={"support/60x60-green.png"} auto-size={true} />
</view>
</view>
</>);
