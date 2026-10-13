/*
Source: imported/wpt-upstream/css/css-flexbox/align-self-008.html
WPT-Revision: dd432b1d351796d3f25e1d1f243ba52da16c3a0a
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: align-self - auto and align-items - flex-end
Assert: The 'align-self' property set 'auto' aligns flex items to end edge of cross-axis when 'align-items' set 'flex-end'
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
<view id={"cover"}>
</view>
</view>
</>);
