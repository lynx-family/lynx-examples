/*
Source: imported/wpt-upstream/css/CSS2/borders/border-003.xht
WPT-Revision: 1492dda6f254cf98840113cbca00b072fe06b9c5
Adapted-By: codex
Adapted-Date: 2026-07-03
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Title: CSS Test: Border set using border-color
Assert: The 'border' shorthand property properly accepts and sets border-color.
Lynx-Note: Adapted as CSS2 border shorthand color-only representative; passes on Pixel_9_Pro emulator at 0.0076% diff.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a hollow blue square."}
</text>
<view className={"test"}>
</view>
</view>
</>);
