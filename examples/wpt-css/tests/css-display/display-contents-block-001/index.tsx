/*
Source: imported/wpt-upstream/css/css-display/display-contents-block-001.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Display: display:contents in block layout
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"You should see the word PASS and no red below."}
</text>
<view>
<view id={"contents"}>
<view id={"inner"}>
<text>
{"P"}
</text>
<text className={"__html-span"}>
{"A"}
</text>
<text>
{"S"}
</text>
<text className={"__html-span"}>
{"S"}
</text>
</view>
</view>
</view>
</view>
</>);
