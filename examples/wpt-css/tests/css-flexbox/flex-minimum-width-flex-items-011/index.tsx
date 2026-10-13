/*
Source: imported/wpt-upstream/css/css-flexbox/flex-minimum-width-flex-items-011.html
WPT-Revision: 269bca0dd35c303639f3c9cf1d8bcb3d911bdb60
Adapted-By: agent
Adapted-Date: 2026-09-21
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: https://github.com/lynx-family/lynx/issues/9763 — The 2:1 bitmap and 50px height do not establish the transferred 100px automatic minimum; lower image disappears. See docs/diagnostics/flex-minimum-width-flex-items-011-20260921.md.
Title: Flex transferred minimum width
Assert: min-width: auto honors transferred size suggestion
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square."}
</text>
<view className={"__inline-001"}>
</view>
<view className={"__inline-002"}>
{/* width:0 makes items shrink to min-width */}
<image src={"support/300x150-green.png"} className={"__inline-003"} auto-size={true} />
</view>
</view>
</>);
