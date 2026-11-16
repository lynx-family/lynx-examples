/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/padding-left-007.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Padding-left using pixels with a nominal value with a plus sign, +96px
Assert: The 'padding-left' property handles a nominal length value in pixels with a plus sign.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is "}
<text>
{"no red"}
</text>
{"."}
</text>
<view id={"div1"}>
<view>
</view>
</view>
</view>
</>);
