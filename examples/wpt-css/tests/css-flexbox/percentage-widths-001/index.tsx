/*
Source: imported/wpt-upstream/css/css-flexbox/percentage-widths-001.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Absolutely positioned children of flexboxes
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
{"Tests that percentage widths get resolved correctly when the flexbox is"}
</text>
</view>
<view id={"content"}>
<text>
{"absolutely positioned without an explicit width. You should see no red."}
</text>
</view>
</view>
</view>
</>);
