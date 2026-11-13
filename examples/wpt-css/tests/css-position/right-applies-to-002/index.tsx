/*
Source: imported/wpt-upstream/css/CSS2/positioning/right-applies-to-002.xht
WPT-Revision: c18fcf34e
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: skipped
Lynx-Unsupported-Reason: Core assertion tests display: table-header-group, which is unsupported in Lynx and cannot be faithfully ported.
Title: CSS Test: Right applied to element with 'display' set to 'table-header-group'
Assert: The 'right' property applies to elements with a display of 'table-header-group'.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a green square on the right side of the page."}
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
