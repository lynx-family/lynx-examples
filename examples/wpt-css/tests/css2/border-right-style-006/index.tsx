/*
Source: imported/wpt-upstream/css/CSS2/borders/border-right-style-006.xht
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0075%
Title: CSS Test: Border-right-style set to 'double'
Assert: The 'border-right-style' set to 'double' renders the proper line style for the border.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a double line."}
</text>
<view className={"test-box"}>
</view>
</view>
</>);
