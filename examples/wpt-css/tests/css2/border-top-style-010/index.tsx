/*
Source: imported/wpt-upstream/css/CSS2/borders/border-top-style-010.xht
WPT-Revision: 58b15ece0
Adapted-By: agent
Adapted-Date: 2026-08-03
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Title: CSS Test: Border-top-style set to 'outset'
Assert: The 'border-top-style' set to 'outset' renders the proper line style for the border.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the line below is solid green or shades of green."}
</text>
<view className={"test"}>
</view>
</view>
</>);
