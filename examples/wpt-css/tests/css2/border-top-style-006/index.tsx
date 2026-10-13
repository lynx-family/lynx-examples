/*
Source: imported/wpt-upstream/css/CSS2/borders/border-top-style-006.xht
WPT-Revision: 58b15ece0
Adapted-By: agent
Adapted-Date: 2026-08-03
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Title: CSS Test: Border-top-style set to 'double'
Assert: The 'border-top-style' set to 'double' renders the proper line style for the border.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a double line."}
</text>
<view className={"test"}>
</view>
</view>
</>);
