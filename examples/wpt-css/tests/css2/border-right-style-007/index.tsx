/*
Source: imported/wpt-upstream/css/CSS2/borders/border-right-style-007.xht
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0576%
Title: CSS Test: Border-right-style set to 'groove'
Assert: The 'border-right-style' set to 'groove' renders the proper line style for the border.
Lynx-Note: Border geometry matches WebView; the residual diff is the darker green groove shade (#004000 in Lynx versus #002c00 in WebView).
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the line is solid green or shades of green."}
</text>
<view className={"test-box"}>
</view>
</view>
</>);
