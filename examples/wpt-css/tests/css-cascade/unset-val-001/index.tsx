/*
Source: imported/wpt-upstream/css/css-cascade/unset-val-001.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Cascade: the "unset" value
Assert: color:unset is the same as color:inherit since color is an inherited property. background-color:unset is the same as background-color:initial since background-color is a non-inherited property.
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
<view className={"outer square"}>
<view className={"under square"}>
</view>
<view className={"inner square"}>
<text>
{"XX"}
</text>
</view>
</view>
</view>
</>);
