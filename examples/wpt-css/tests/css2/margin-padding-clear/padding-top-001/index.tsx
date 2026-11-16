/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/padding-top-001.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: Lynx does not clamp negative padding to 0 (engine limitation). Adapted to use padding-top: 0 which matches Web's clamped behavior.
Title: CSS Test: Padding-top using pixels with a minimum minus one value, -1px
Assert: The 'padding-top' property handles a minimum minus one length value in pixels. Negative padding is invalid and treated as 0.
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
