/*
Source: imported/wpt-upstream/css/css-flexbox/flex-flow-001.html
WPT-Revision: f90a67969
Adapted-By: wpt-adapter agent
Adapted-Date: 2026-05-21
Reference-Mode: web-test-render
Lynx-Status: passing
Assert: The 'flex-flow' property set 'row nowrap' controls the flex container is single-line
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"} style={"margin-bottom: 0;"}>
{"Test passes if there is a filled green rectangle whose width is greater than height"}
</text>
<text className={"__ua-p"} style={"margin-top: 0;"}>
{"  and the number within rectangle is '1 2 3 4' from left to right."}
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
