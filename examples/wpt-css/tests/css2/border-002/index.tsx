/*
Source: imported/wpt-upstream/css/CSS2/borders/border-002.xht
WPT-Revision: 1492dda6f254cf98840113cbca00b072fe06b9c5
Adapted-By: codex
Adapted-Date: 2026-07-03
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Title: CSS Test: Border set using border-style
Assert: The 'border' shorthand property properly accepts and sets border-style.
Lynx-Note: Adapted as CSS2 border shorthand style-only representative; passes on Pixel_9_Pro emulator at 0.2661% diff.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a box with a dashed border below."}
</text>
<view className={"test"}>
</view>
</view>
</>);
