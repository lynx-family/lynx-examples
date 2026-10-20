/*
Source: imported/wpt-upstream/css/css-flexbox/gap-001-ltr.html
WPT-Revision: 904a89586ce51c18f133f307304e418a3f42bfa7
Adapted-By: codex
Adapted-Date: 2026-08-05
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: gap - horizontal
Assert: The 'gap' property enables putting space exclusively between items
Note: Android WebView-reference pass on Pixel_6_Pro (24111FDEE002V3), 2026-08-05; diff 0.1812% (8,143 pixels). Evidence: css-flexbox-five-20260805.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a green vertical line between boxes."}
</text>
<view className={"container"}>
<view className={"item"}>
</view>
<view className={"item"}>
</view>
<view className={"item"}>
</view>
</view>
</view>
</>);
