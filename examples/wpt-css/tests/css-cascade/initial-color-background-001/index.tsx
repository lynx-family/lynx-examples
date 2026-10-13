/*
Source: imported/wpt-upstream/css/css-cascade/initial-color-background-001.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Cascade: the "initial" value
Assert: initial is not the same as inherit. color:initial results in non-red. background-color:initial results in transparent.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a \"W\" and "}
<text>
{"no red"}
</text>
{"."}
</text>
<view className={"outer original-div"}>
<view className={"inner original-div"}>
<text>
{"W"}
</text>
</view>
</view>
</view>
</>);
