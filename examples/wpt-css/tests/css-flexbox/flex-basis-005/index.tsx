/*
Source: imported/wpt-upstream/css/css-flexbox/flex-basis-005.html
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-06-03
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: flex-basis - 0
Assert: The 'flex-basis' property set '0', the actual width of tested element is same as 0.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view id={"container"}>
<view id={"test"}>
</view>
</view>
</view>
</>);
