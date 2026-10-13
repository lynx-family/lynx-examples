/*
Source: imported/wpt-upstream/css/CSS2/positioning/left-004.xht
WPT-Revision: b2be13960
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: setup-only height: 1in normalized to 96px in TTSS; the property under test remains left: -0px.
Title: CSS Test: Left using pixels with a value of negative zero, -0px
Assert: The 'left' property sets a negative zero length value in pixels.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is no space between the orange and blue lines."}
</text>
<view id={"div1"}>
<view id={"div2"}>
</view>
</view>
</view>
</>);
