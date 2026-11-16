/*
Source: imported/wpt-upstream/css/css-overflow/overflow-clip-margin-002.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: failing
Title: Verifies overflow-clip-margin impacts layout
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"You should see a green box with scrollbars."}
</text>
<view className={"scroller"}>
<view className={"parent"}>
<view className={"child"}>
</view>
</view>
</view>
<text className={"__ua-p"}>
{"You should see a green box with scrollbars."}
</text>
<view className={"scroller"}>
<view className={"parent __inline-001"}>
<view className={"child"}>
</view>
</view>
</view>
<text className={"__ua-p"}>
{"You should see a green box with no scrollbars."}
</text>
<view className={"scroller"}>
<view className={"parent __inline-002"}>
</view>
</view>
</view>
</>);
