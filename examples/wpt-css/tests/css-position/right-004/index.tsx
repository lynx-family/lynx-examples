/*
Source: imported/wpt-upstream/css/CSS2/positioning/right-004.xht
WPT-Revision: c18fcf34e
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: setup-only height: 1in normalized to 96px in TTSS; the property under test remains right: -0px.
Title: CSS Test: Right using pixels with a value of negative zero, -0px
Assert: The 'right' property sets a negative zero length value in pixels.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is no space between the blue and orange lines."}
</text>
<view id={"div1"}>
<view id={"div2"}>
</view>
</view>
</view>
</>);
