/*
Source: imported/wpt-upstream/css/CSS2/borders/border-right-style-001.xht
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0148%
Title: CSS Test: Border-right-style set to 'none'
Assert: The 'border-right-style' property set to 'none' does not render any border for an element.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is nothing below."}
</text>
<view className={"test-box"}>
</view>
</view>
</>);
