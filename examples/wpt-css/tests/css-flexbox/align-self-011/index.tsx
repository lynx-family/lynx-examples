/*
Source: imported/wpt-upstream/css/css-flexbox/align-self-011.html
WPT-Revision: dd432b1d351796d3f25e1d1f243ba52da16c3a0a
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: align-self - auto and align-items - stretch
Assert: The 'align-self' property set 'auto' makes the cross size of the item's margin box
as close to the same size as the line as possible when 'align-items' set 'stretch'
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view id={"test"}>
<view className={"flex-item"}>
</view>
<view className={"flex-item"}>
</view>
<view className={"flex-item"}>
</view>
<view className={"flex-item"}>
</view>
</view>
</view>
</>);
