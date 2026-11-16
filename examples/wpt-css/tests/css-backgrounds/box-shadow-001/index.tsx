/*
Source: imported/wpt-upstream/css/css-backgrounds/box-shadow-001.htm
WPT-Revision: 8490c1753
Adapted-By: agent
Adapted-Date: 2026-07-10
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Positive value of horizontal offset
Assert: A positive value for the horizontal offset of the 'box-shadow' draws a shadow that is offset to the right of the box.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is no red visible on the page."}
</text>
<view id={"reference"}>
<view id={"shadow-target"}>
</view>
</view>
</view>
</>);
