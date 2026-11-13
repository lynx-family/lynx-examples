/*
Source: imported/wpt-upstream/css/css-text/text-align/text-align-last-center.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: failing
Title: text-align-last: center
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Lorem ipsum"}
</text>
<text {...{"dir": "rtl"}} className={"__ua-p"}>
{"אמר המחבר"}
</text>
</view>
</>);
