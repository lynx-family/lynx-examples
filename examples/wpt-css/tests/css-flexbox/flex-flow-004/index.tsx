/*
Source: imported/wpt-upstream/css/css-flexbox/flex-flow-004.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-31
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: flex-flow - row-reverse nowrap
Assert: The 'flex-flow' property set 'row-reverse nowrap' controls the flex container is single-line,
but the main-start and main-end directions are swapped
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green rectangle whose width is greater than height and the number within rectangle is '1 2 3 4' from left to right."}
</text>
<view id={"test"}>
<view className={"flex-item"}>
<text>
{"4"}
</text>
</view>
<view className={"flex-item"}>
<text>
{"3"}
</text>
</view>
<view className={"flex-item"}>
<text>
{"2"}
</text>
</view>
<view className={"flex-item"}>
<text>
{"1"}
</text>
</view>
</view>
</view>
</>);
