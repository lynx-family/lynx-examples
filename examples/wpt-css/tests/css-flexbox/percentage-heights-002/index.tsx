/*
Source: imported/wpt-upstream/css/css-flexbox/percentage-heights-002.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Percentage sizing in flexboxes
Assert: Checks that we correctly size percentage-sized
children of absolute-positioned flex boxes
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"container"}>
<view id={"top-bar"}>
<text>
{"Tests that percentage heights get resolved correctly when the flexbox is"}
</text>
</view>
<view id={"content"}>
<text>
{"absolutely positioned without an explicit height. You should see no red."}
</text>
</view>
</view>
</view>
</>);
