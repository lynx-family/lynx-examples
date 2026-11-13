/*
Source: imported/wpt-upstream/css/css-position/position-relative-006.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: failing
Assert: This ensures that a relative-positioned element inset doesn't resolve against an indefinite size.
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
</view>
</view>
</view>
</>);
