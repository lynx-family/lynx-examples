/*
Source: imported/wpt-upstream/css/css-backgrounds/background-334.html
WPT-Revision: 35cfbe8b9261
Adapted-By: codex
Adapted-Date: 2026-05-26
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 1.9995%
Title: CSS Backgrounds and Borders Test: background shorthand - background-size '100% auto'
Assert: Background-size with '100% auto' implies to rescale the image horizontally so that it fills the background area width and to rescale the image vertically so that it fills the background area height.
Lynx-Note: The resized green background image is visible, but red sentinel pixels show through dotted border gaps where WebView paints the background under the border area.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square with gray background, black dotted borders and no red."}
</text>
<view id={"ref"}>
</view>
<view id={"test"}>
</view>
</view>
</>);
