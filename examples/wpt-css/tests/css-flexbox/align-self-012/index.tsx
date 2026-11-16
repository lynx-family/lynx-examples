/*
Source: imported/wpt-upstream/css/css-flexbox/align-self-012.html
WPT-Revision: dd432b1d351796d3f25e1d1f243ba52da16c3a0a
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: align-self - auto (initial value)
Assert: The initial value of 'align-self' property is 'auto'
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view id={"test"}>
<view className={"flex-item auto"}>
</view>
<view className={"flex-item auto"}>
</view>
<view className={"flex-item"}>
</view>
<view className={"flex-item"}>
</view>
</view>
</view>
</>);
