/*
Source: imported/wpt-upstream/css/css-flexbox/flex-basis-004.html
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-06-09
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Lynx clamps negative flex-basis to 0 (test item collapses, red container shows through); Web treats negative flex-basis as invalid and falls back to the specified width.
Title: CSS Flexbox Test: flex-basis - negative number(width specified)
Assert: The 'flex-basis' property set negative number, the actual width of tested element is
same as the value of 'width' property specified.
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
<view id={"test"}>
</view>
<view id={"ref"}>
</view>
</view>
<view id={"cover"}>
</view>
</view>
</>);
