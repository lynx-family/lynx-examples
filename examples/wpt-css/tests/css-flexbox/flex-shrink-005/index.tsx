/*
Source: imported/wpt-upstream/css/css-flexbox/flex-shrink-005.html
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-06-10
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: flex-shrink - 0
Assert: The flex-shrink property set 0 will ignore the flex container
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and "}
<text>
{"no red"}
</text>
{"."}
</text>
<view id={"container"}>
<view id={"test1"}>
</view>
<view id={"test2"}>
</view>
</view>
<view id={"cover"}>
</view>
</view>
</>);
