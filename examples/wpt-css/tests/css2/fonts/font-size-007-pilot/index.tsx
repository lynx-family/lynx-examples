/*
Source: imported/wpt-upstream/css/CSS2/fonts/font-size-007.xht
WPT-Revision: (to be filled during import)
Adapted-By: wpt-adapter agent
Adapted-Date: 2026-05-29
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Diff: 0.0179%
Title: CSS Test: Font-size using pixels with a positive nominal value, +96px
Assert: The 'font-size' property sets a positive nominal length value in pixels.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the two boxes below are the same size."}
</text>
<view id={"div1"}>
<view id={"div2"}>
<text>
{"X"}
</text>
</view>
<view id={"div3"}>
</view>
</view>
</view>
</>);
