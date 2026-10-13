/*
Source: imported/wpt-upstream/css/CSS2/positioning/left-applies-to-002.xht
WPT-Revision: b2be13960
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: skipped
Lynx-Unsupported-Reason: Core assertion tests display: table-header-group, which is unsupported in Lynx and cannot be faithfully ported.
Title: CSS Test: Left applied to element with 'display' set to 'table-header-group'
Assert: The 'left' property applies to elements with a display of 'table-header-group'.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square on the left side of the page."}
</text>
<view id={"table"}>
<view id={"test"}>
<view id={"row"}>
<view id={"cell"}>
</view>
</view>
</view>
</view>
</view>
</>);
