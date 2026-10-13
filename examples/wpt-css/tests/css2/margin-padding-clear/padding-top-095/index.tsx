/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/padding-top-095.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: Lynx does not support 'in' unit; converted to px (1in = 96px).
Title: CSS Test: Padding-top using percentage with a nominal value with a plus sign, +50%
Assert: The 'padding-top' property handles a nominal length value in percentage with a plus sign.
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
<view id={"wrapper"}>
<view id={"div1"}>
</view>
<view id={"div2"}>
</view>
</view>
</view>
</>);
