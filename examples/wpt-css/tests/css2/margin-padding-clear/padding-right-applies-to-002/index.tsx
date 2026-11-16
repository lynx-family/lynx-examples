/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/padding-right-applies-to-002.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-20
Reference-Mode: web-test-render
Lynx-Status: skipped
Lynx-Issue: display: table-header-group, table, table-row, table-cell are unsupported in Lynx
Title: CSS Test: Padding-right applied to element with display table-header-group
Assert: The 'padding-right' property does not apply to elements with a display of table-header-group.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is "}
<text>
{"no space between"}
</text>
{" the blue and orange lines."}
</text>
<view id={"wrapper"}>
<view id={"table"}>
<view id={"test"}>
<view id={"row"}>
<view id={"cell"}>
<view id={"div-inner"}>
</view>
</view>
</view>
</view>
</view>
</view>
</view>
</>);
