/*
Source: imported/wpt-upstream/css/css-flexbox/justify-content-002.htm
WPT-Revision: 904a89586ce51c18f133f307304e418a3f42bfa7
Adapted-By: codex
Adapted-Date: 2026-08-05
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: A flex container with the 'justify-content' property set to 'flex-start'
Assert: This test checks that the flex container with 'justify-content: flex-start' packs flex items toward the start of the main axis of each line.
Note: Android WebView-reference pass on Pixel_6_Pro (24111FDEE002V3), 2026-08-05; diff 0.0791% (3,556 pixels). The source's setup-only gradient is represented by static guide views. Evidence: css-flexbox-five-20260805.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a single blue rectangle on the left, a single orange rectangle directly to its right, and there is no red visible on the page."}
</text>
<view id={"flexbox"}>
<view className={"red-guide"}>
</view>
<view className={"flex-item"}>
</view>
<view className={"flex-item"}>
</view>
</view>
</view>
</>);
