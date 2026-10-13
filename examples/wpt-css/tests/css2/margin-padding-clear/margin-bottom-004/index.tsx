/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/margin-bottom-004.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-20
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Margin-bottom using pixels with a negative zero value, -0px
Assert: The 'margin-bottom' property sets a negative zero length value in pixels.
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
<view id={"div1"}>
</view>
<view id={"div2"}>
</view>
</view>
</>);
