/*
Source: imported/wpt-upstream/css/css-position/position-relative-001.html
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-17
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0521%
Lynx-Note: Replaced WPT inline span wrappers with zero-sized view wrappers because Lynx does not support inline span layout; the tested position:relative percentage and pixel insets are unchanged.
Assert: A percent inset resolves against the available size.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and "}
<text>
{"no red"}
</text>
{"."}
</text>
<view className={"container"}>
<view className={"percent-offset"}>
<view className={"green"}>
</view>
</view>
</view>
</>);
