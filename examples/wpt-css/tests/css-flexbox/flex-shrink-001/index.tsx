/*
Source: imported/wpt-upstream/css/css-flexbox/flex-shrink-001.html
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-06-03
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: flex-shrink - number(positive)
Assert: The flex-shrink property set positive number determines how much the flex item will shrink relative to the rest of the flex items in the flex container when negative free space is distributed
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
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
