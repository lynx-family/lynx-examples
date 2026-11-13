/*
Source: imported/wpt-upstream/css/CSS2/borders/border-right-011.xht
WPT-Revision: 5a18ac447a1968a0446e11a9024a5ee23941cfad
Adapted-By: codex
Adapted-Date: 2026-06-23
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Title: CSS Test: Border-right set to border-width border-color border-style
Assert: The 'border-right' shorthand property properly sets the 'border-width', 'border-color' and 'border-style'.
Lynx-Note: Source uses 1in as helper geometry; TTSS normalizes it to 96px for Web visual parity and does not claim native Lynx in-unit support. Passes on emulator-5554 at 0.1166% diff.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a dashed blue line below."}
</text>
<view className={"test"}>
</view>
</view>
</>);
