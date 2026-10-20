/*
Source: imported/wpt-upstream/css/CSS2/borders/border-top-011.xht
WPT-Revision: 5a18ac447a1968a0446e11a9024a5ee23941cfad
Adapted-By: codex
Adapted-Date: 2026-06-23
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Title: CSS Test: Border-top set to border-width border-color border-style
Assert: The 'border-top' shorthand property sets the 'border-width', 'border-color' and 'border-style' for the top border.
Lynx-Note: Adapted as CSS2 border-top:<length> representative; passes on emulator-5554 at 0.2741% diff.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a dashed blue line."}
</text>
<view className={"test"}>
</view>
</view>
</>);
