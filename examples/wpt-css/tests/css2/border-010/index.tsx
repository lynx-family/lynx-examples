/*
Source: imported/wpt-upstream/css/CSS2/borders/border-010.xht
WPT-Revision: 5a18ac447a1968a0446e11a9024a5ee23941cfad
Adapted-By: codex
Adapted-Date: 2026-06-23
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Title: CSS Test: Border set using border-width border-style border-color
Assert: The 'border' shorthand property properly accepts and sets 'border-width', 'border-style' and 'border-color'.
Lynx-Note: Source uses 1in as helper geometry; TTSS normalizes it to 96px for Web visual parity and does not claim native Lynx in-unit support. Passes on emulator-5554 at 0.3095% diff.
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
