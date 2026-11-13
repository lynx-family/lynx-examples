/*
Source: imported/wpt-upstream/css/css-flexbox/align-self-002.html
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-06-10
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: align-self - flex-end
Assert: The 'align-self' property set 'flex-end' aligns the flex items to the end edge of cross axis
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
<view id={"test"}>
<view>
</view>
<view>
</view>
<view>
</view>
<view>
</view>
</view>
<view id={"cover"}>
</view>
</view>
</>);
