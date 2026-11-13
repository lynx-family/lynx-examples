/*
Source: imported/wpt-upstream/css/css-ui/box-sizing-001.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Basic User Interface Test: box-sizing:border-box and CSS2.1 10.3.3
Assert: When box-sizing is border-box, the content width, rather than the computed value of the width property,
                             is considered when checking whether a block is larger than its containing block.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a "}
<text>
{"filled green square"}
</text>
{" and "}
<text>
{"no red"}
</text>
{"."}
</text>
<view id={"cb"}>
<view id={"red"}>
</view>
<view id={"test"}>
</view>
</view>
</view>
</>);
