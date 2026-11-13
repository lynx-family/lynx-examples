/*
Source: imported/wpt-upstream/css/css-flexbox/flex-flow-002.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-31
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: flex-flow - row wrap
Assert: The 'flex-flow' property set 'row wrap' controls the flex container is multi-line
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red, the number within square is '1 2 3 4' from left to right, top to bottom."}
</text>
<view id={"test"}>
<view className={"flex-item"}>
<text>
{"1"}
</text>
</view>
<view className={"flex-item"}>
<text>
{"2"}
</text>
</view>
<view className={"flex-item"}>
<text>
{"3"}
</text>
</view>
<view className={"flex-item"}>
<text>
{"4"}
</text>
</view>
</view>
</view>
</>);
