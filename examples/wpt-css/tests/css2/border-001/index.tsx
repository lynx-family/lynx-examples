/*
Source: imported/wpt-upstream/css/CSS2/borders/border-001.xht
WPT-Revision: 5a18ac447a1968a0446e11a9024a5ee23941cfad
Adapted-By: codex
Adapted-Date: 2026-06-23
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Title: CSS Test: Border set using border-width
Assert: The 'border' shorthand property properly accepts and sets border-width.
Lynx-Note: Adapted as CSS2 border:<length> representative; passes on emulator-5554 at 0.1408% diff.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a hollow black square."}
</text>
<view className={"test"}>
</view>
</view>
</>);
