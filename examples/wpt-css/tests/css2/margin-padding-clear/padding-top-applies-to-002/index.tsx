/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/padding-top-applies-to-002.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: skipped
Lynx-Note: Tests display: table-header-group which is unsupported in Lynx. Skipped.
Title: CSS Test: Padding-top applied to element with display table-header-group
Assert: The 'padding-top' property does not apply to elements with a display of table-header-group.
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
<view>
</view>
</view>
</view>
</view>
</view>
</view>
</view>
</>);
