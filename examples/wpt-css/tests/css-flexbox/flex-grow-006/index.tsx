/*
Source: imported/wpt-upstream/css/css-flexbox/flex-grow-006.html
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-06-10
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: flex-grow - positive number(fill all space)
Assert: Test checks that all space of flex container will be filled when there is only one flex item and 'flex-grow' set any positive number.
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
<view className={"container"}>
<view id={"test1"}>
</view>
</view>
<view className={"container"}>
<view id={"test2"}>
</view>
</view>
</view>
</>);
