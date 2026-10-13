/*
Source: imported/wpt-upstream/css/css-backgrounds/background-size-cover-001.html
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 1.2528%
Title: CSS Backgrounds and Borders Test: background-size - cover keyword value
Assert: The background shorthand accepts cover in its size slot and scales the 1:1 image to cover the positioning area.
Lynx-Note: Uses the source WPT visual oracle but combines its image, repeat, position, and cover size into one equivalent background shorthand declaration. Lynx paints only the 100x50 padding-box region green and leaves the lower 100x50 red sentinel visible, while WebView paints the image under the transparent border.
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
