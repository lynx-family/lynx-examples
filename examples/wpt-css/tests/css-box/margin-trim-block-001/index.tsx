/*
Source: imported/wpt-upstream/css/css-box/margin-trim/block-container-block-001.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: failing
Title: margin-trim: block-container-block-001
Assert: block should trim block start and end margins for block-level first child
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square."}
</text>
<view className={"container"}>
<view className={"child"}>
</view>
</view>
<view className={"outer"}>
</view>
</view>
</>);
