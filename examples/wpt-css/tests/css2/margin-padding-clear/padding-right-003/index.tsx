/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/padding-right-003.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-20
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Padding-right using pixels with a minimum plus one value, 1px
Assert: The 'padding-right' property handles a minimum plus one length value in pixels.
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
