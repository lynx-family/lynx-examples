/*
Source: imported/wpt-upstream/css/css-backgrounds/background-size-contain-001.html
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0219%
Title: CSS Backgrounds and Borders Test: background-size - contain keyword value
Assert: The background shorthand accepts contain in its size slot and scales the 1:1 image to fit the positioning area.
Lynx-Note: Uses the source WPT visual oracle but combines its image, repeat, position, and contain size into one equivalent background shorthand declaration.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view id={"ref-overlapped-red"}>
</view>
<view id={"test-overlapping-green"}>
</view>
</view>
</>);
