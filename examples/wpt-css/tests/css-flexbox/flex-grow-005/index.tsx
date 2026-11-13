/*
Source: imported/wpt-upstream/css/css-flexbox/flex-grow-005.html
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-06-09
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: flex-grow - (invalid when applied to flex container)
Assert: The 'flex-grow' property is invalid when the property applied to flex container.
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
<view id={"container"}>
<view>
</view>
<view>
</view>
</view>
<view id={"cover"}>
</view>
</view>
</>);
