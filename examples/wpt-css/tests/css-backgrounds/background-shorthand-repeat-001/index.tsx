/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-repeat-001.xht
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0118%
Title: CSS Test: Background-repeat set to 'repeat'
Assert: The background shorthand repeat value tiles the background image horizontally and vertically.
Lynx-Note: Uses the source WPT visual oracle but combines its image and two-axis repeat value into one equivalent background shorthand declaration.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"Test passes if the area inside the black rectangle is blue."}
</text>
<view className={"test"}>
</view>
</view>
</>);
