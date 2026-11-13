/*
Source: imported/wpt-upstream/css/css-flexbox/flex-minimum-width-flex-items-013.html
WPT-Revision: 269bca0dd35c303639f3c9cf1d8bcb3d911bdb60
Adapted-By: agent
Adapted-Date: 2026-09-21
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: https://github.com/lynx-family/lynx/issues/9763 — Lynx loses the lower image. WebView 91 also fails the green-square assertion, rendering a 300px-wide lower image; screenshot is environment comparison, not normative geometry. See docs/diagnostics/flex-minimum-width-flex-items-013-20260921.md.
Title: Flex transferred minimum width
Assert: content size suggestion of a replaced aspect-ratio item accounts for definition stretched cross size
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
<view className={"__inline-001"}>
</view>
{/* This just completes the green square. */}
<view className={"__inline-002"}>
{/*
    content size suggestion is 100px because the image has a stretched height of 50px. So min-content size of the image is 300x150/50 = 100.
    specified size suggestion is 150px
    transferred size suggestion is 100px

    transferred size suggestion is ignored because there is a specified size.

    So here the content-based minimum size is min(100px, 150px) = 100px
  */}
<image src={"support/300x150-green.png"} className={"__inline-003"} auto-size={true} />
</view>
</view>
</>);
