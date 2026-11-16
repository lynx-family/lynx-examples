/*
Source: imported/wpt-upstream/css/CSS2/linebox/line-height-applies-to-009.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-06-03
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Line-height applied to elements with 'display' set to 'block'
Assert: The 'line-height' property applies to elements with 'display' set to 'block'.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the blue and orange rectangles have the same height."}
</text>
<view id={"div1"}>
<view id={"blue-box"}>
<text id={"blue-text"}>
{"X"}
</text>
</view>
<view id={"orange-ref"}>
</view>
</view>
</view>
</>);
