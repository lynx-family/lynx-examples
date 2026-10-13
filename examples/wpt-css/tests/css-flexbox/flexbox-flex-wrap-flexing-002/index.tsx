/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox-flex-wrap-flexing-002.html
WPT-Revision: 269bca0dd35c303639f3c9cf1d8bcb3d911bdb60
Adapted-By: agent
Adapted-Date: 2026-09-21
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: WebView 91 fails the square assertion; Lynx renders the square. See docs/diagnostics/flexbox-flex-wrap-flexing-002-20260921.md.
Assert: Items flex after column line breaking against max-height to form a filled green square.
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
<view className={"__inline-003"}>
</view>
</view>
</view>
</>);
