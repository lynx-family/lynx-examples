/*
Source: imported/wpt-upstream/css/css-flexbox/flex-minimum-width-flex-items-009.html
WPT-Revision: 269bca0dd35c303639f3c9cf1d8bcb3d911bdb60
Adapted-By: agent
Adapted-Date: 2026-09-21
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: https://github.com/lynx-family/lynx/issues/9763 — Cross-axis min-height does not establish the image automatic minimum width; Lynx renders a roughly 10x100 strip. See docs/diagnostics/flex-minimum-width-flex-items-009-20260921.md.
Title: CSS Flexible Box Test: Minimum width of flex items
Assert: Implied minimum main content suggestion accounts for minimum cross size when items have an aspect ratio.
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
