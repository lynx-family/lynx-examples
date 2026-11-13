/*
Source: imported/wpt-upstream/css/CSS2/borders/border-right-style-003.xht
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 0.0372%
Title: CSS Test: Border-right-style set to 'dotted'
Assert: The 'border-right-style' set to 'dotted' renders the proper line style for the border.
Lynx-Note: A strict 0% rerun fails because Lynx paints five 30x32-device-pixel rectangular segments while WebView paints five circular dots in the same vertical span.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a dotted line."}
</text>
<view className={"test-box"}>
</view>
</view>
</>);
