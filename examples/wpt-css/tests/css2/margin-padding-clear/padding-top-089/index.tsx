/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/padding-top-089.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: Lynx does not support 'in' unit; converted to px (1in = 96px). Negative percentage padding adapted to 0.
Title: CSS Test: Padding-top using percentage with a minimum minus one value, -1%
Assert: The 'padding-top' property handles a minimum minus one length value in percentage.
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
<view id={"div1"}>
</view>
<view id={"div2"}>
</view>
</view>
</view>
</>);
