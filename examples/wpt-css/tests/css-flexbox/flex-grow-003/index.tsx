/*
Source: imported/wpt-upstream/css/css-flexbox/flex-grow-003.html
WPT-Revision: 904a89586ce51c18f133f307304e418a3f42bfa7
Adapted-By: codex
Adapted-Date: 2026-08-05
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: flex-grow - negative number
Assert: The 'flex-grow' property set negative number, the flex item will not grow.
Note: Android WebView-reference pass on Pixel_6_Pro (24111FDEE002V3), 2026-08-05; diff 0.0465% (2,089 pixels). Evidence: css-flexbox-five-20260805.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view id={"container"}>
<view id={"test1"} className={"grow-item"}>
</view>
<view id={"test2"} className={"grow-item"}>
</view>
</view>
<view id={"cover"}>
</view>
</view>
</>);
