/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/padding-right-001.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-20
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: Adapted TTSS clamps the invalid negative padding to 0 and constrains the empty nested boxes to width 0 to match the WPT float:left shrink-wrap visual result; the upstream WPT source is unchanged.
Title: CSS Test: Padding-right using pixels with a minimum minus one value, -1px
Assert: The 'padding-right' property handles a minimum minus one length value in pixels. Negative padding is invalid and treated as 0.
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
<view>
</view>
</view>
</view>
</>);
