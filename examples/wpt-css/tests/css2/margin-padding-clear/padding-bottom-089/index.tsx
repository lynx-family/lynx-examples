/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/padding-bottom-089.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-18
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: Converted width from 1in to 96px (in unit unsupported in Lynx)
Title: CSS Test: Padding-bottom using percentage with a minimum minus one value, -1%
Assert: The 'padding-bottom' property handles a minimum minus one length value in percentage. Negative padding is invalid and treated as 0.
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
