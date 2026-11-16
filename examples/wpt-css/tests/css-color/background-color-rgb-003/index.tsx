/*
Source: imported/wpt-upstream/css/css-color/background-color-rgb-003.html
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-25
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS-Color-4: rgb() and rgba() are aliases of each other - test
Assert: rgb() should have the identical grammar and behavior to rgba().
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"p1"} className={"color-row row-first"}>
<text className={"color-label"}>
{"color"}
</text>
</view>
<view id={"p2"} className={"color-row"}>
<text className={"color-label"}>
{"color"}
</text>
</view>
<view id={"p3"} className={"color-row"}>
<text className={"color-label"}>
{"color"}
</text>
</view>
<view id={"p4"} className={"color-row"}>
<text className={"color-label"}>
{"color"}
</text>
</view>
<view id={"p5"} className={"color-row"}>
<text className={"color-label"}>
{"color"}
</text>
</view>
<view id={"p6"} className={"color-row"}>
<text className={"color-label"}>
{"color"}
</text>
</view>
<view id={"p7"} className={"color-row"}>
<text className={"color-label"}>
{"color"}
</text>
</view>
<view id={"p8"} className={"color-row"}>
<text className={"color-label"}>
{"color"}
</text>
</view>
<view id={"p9"} className={"color-row"}>
<text className={"color-label"}>
{"color"}
</text>
</view>
<view id={"p10"} className={"color-row"}>
<text className={"color-label"}>
{"color"}
</text>
</view>
</view>
</>);
