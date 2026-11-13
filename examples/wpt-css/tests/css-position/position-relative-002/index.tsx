/*
Source: imported/wpt-upstream/css/css-position/position-relative-002.html
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-18
Reference-Mode: web-test-render
Lynx-Status: partial
Assert: A percent inset resolves against the available size.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and "}
<text>
{"no red"}
</text>
{"."}
</text>
<view className={"__inline-001"}>
<view className={"__inline-002"}>
<view className={"__inline-003"}>
</view>
</view>
</view>
</view>
</>);
