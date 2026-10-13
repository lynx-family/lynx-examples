/*
Source: imported/wpt-upstream/css/css-flexbox/flex-grow-007.html
WPT-Revision: 58b15ece0
Adapted-By: agent
Adapted-Date: 2026-07-08
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: flex-grow - less than one
Assert: Test checks that remaining free space is calculated from 'flex-grow' set to positive number less than one.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view className={"container"}>
<view id={"test1"}>
<view>
</view>
</view>
</view>
<view className={"container"}>
<view id={"test2"}>
<view>
</view>
<view>
</view>
</view>
</view>
</view>
</>);
