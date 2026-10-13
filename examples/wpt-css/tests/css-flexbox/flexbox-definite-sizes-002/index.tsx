/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox-definite-sizes-002.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: nested flex containers with height established by 'min-height'
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if you see a green 100px x 100px square, and no red"}
</text>
<view className={"flex-container"}>
<view className={"item"}>
<view className={"span"}>
</view>
</view>
</view>
</view>
</>);
