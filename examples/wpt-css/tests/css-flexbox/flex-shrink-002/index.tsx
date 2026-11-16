/*
Source: imported/wpt-upstream/css/css-flexbox/flex-shrink-002.html
WPT-Revision: 904a89586ce51c18f133f307304e418a3f42bfa7
Adapted-By: codex
Adapted-Date: 2026-08-05
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: flex-shrink - number(negative)
Assert: The flex-shrink property set negative is invalid to shrink flex items when negative free space is distributed
Note: Physical Pixel_6_Pro (24111FDEE002V3) WebView-reference pass on 2026-08-06 at 0.0465% (2,089 pixels); negative flex-shrink values are now rejected.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view id={"container"}>
<view id={"test1"} className={"shrink-item"}>
</view>
<view id={"test2"} className={"shrink-item"}>
</view>
</view>
<view id={"cover"}>
</view>
</view>
</>);
