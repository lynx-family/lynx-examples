/*
Source: imported/wpt-upstream/css/css-backgrounds/background-clip-padding-box-001.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: passing
Title: background-clip: padding-box with fractional border-width
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square."}
</text>
<view id={"back"}>
<view id={"target"}>
</view>
</view>
</view>
</>);
