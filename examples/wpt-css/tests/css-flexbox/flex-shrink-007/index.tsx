/*
Source: imported/wpt-upstream/css/css-flexbox/flex-shrink-007.html
WPT-Revision: ce9441ee673c68c5d175d2363c9ff2e4893b827c
Adapted-By: codex
Adapted-Date: 2026-08-06
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: flex-shrink - applied to flex container
Assert: The flex-shrink property applied to flex container is invalid, all flex items will use the default value 1
Note: Physical Pixel_6_Pro (24111FDEE002V3) WebView-reference pass on 2026-08-06 at 0.0465% (2,089 pixels). Evidence: css-flexbox-flex-shrink-20260806.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view id={"container"}>
<view id={"test1"}>
</view>
<view id={"test2"}>
</view>
</view>
<view id={"cover"}>
</view>
</view>
</>);
