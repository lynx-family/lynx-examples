/*
Source: imported/wpt-upstream/css/css-display/display-contents-flex-001.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: display: contents inside a flex container
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if you see the word \"PASS\", with a \"0\" under the first \"S\", and no red"}
</text>
<view className={"flex"}>
<text>
{"P"}
</text>
<view className={"contents"}>
<view>
<text>
{"A"}
</text>
</view>
</view>
<view className={"contents"}>
<view className={"inline"}>
<text>
{"S"}
</text>
<view>
<text>
{"0"}
</text>
</view>
</view>
</view>
<view className={"contents"}>
<text>
{"S"}
</text>
</view>
</view>
</view>
</>);
