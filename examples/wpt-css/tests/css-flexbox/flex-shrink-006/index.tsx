/*
Source: imported/wpt-upstream/css/css-flexbox/flex-shrink-006.html
WPT-Revision: ce9441ee673c68c5d175d2363c9ff2e4893b827c
Adapted-By: codex
Adapted-Date: 2026-08-06
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: flex-shrink - 0(one of flex-shrinks sets 0, another not)
Assert: The flex item whose flex-shrink property of set 0 will displayed on the top of all flex items
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
<view id={"test3"}>
</view>
<view id={"test4"}>
</view>
</view>
</view>
</>);
