/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-014.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-01
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Background with (repeat color)
Assert: Background with (repeat color) sets the background of the element to the color specified.  Repeat does nothing since there is no image.
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
