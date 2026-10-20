/*
Source: imported/wpt-upstream/css/css-flexbox/flex-minimum-width-flex-items-010.html
WPT-Revision: 269bca0dd35c303639f3c9cf1d8bcb3d911bdb60
Adapted-By: agent
Adapted-Date: 2026-09-21
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: https://github.com/lynx-family/lynx/issues/9763 — Cross-axis max-height does not protect the automatic minimum width; Lynx shrinks the image to roughly 10x10. See docs/diagnostics/flex-minimum-width-flex-items-010-20260921.md.
Title: CSS Flexible Box Test: Minimum width of flex items
Assert: Implied minimum main content suggestion accounts for maximum cross size when items have an aspect ratio.
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
