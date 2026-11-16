/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-010.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-01
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Background with (image color)
Assert: Background with (image color) sets the background of the element to the color specified (not shown) and tiles the image across the background.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green rectangle across the page."}
</text>
<view className={"test-box"}>
</view>
</view>
</>);
