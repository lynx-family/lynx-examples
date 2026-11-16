/*
Source: imported/wpt-upstream/css/CSS2/borders/border-007.xht
WPT-Revision: 1492dda6f254cf98840113cbca00b072fe06b9c5
Adapted-By: codex
Adapted-Date: 2026-07-03
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Title: CSS Test: Border set using border-style border-color
Assert: The 'border' shorthand property properly accepts and sets 'border-style' and 'border-color'.
Lynx-Note: Adapted as CSS2 border shorthand style+color representative; passes on Pixel_9_Pro emulator at 0.2558% diff.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a box below with a dashed blue border."}
</text>
<view className={"test"}>
</view>
</view>
</>);
