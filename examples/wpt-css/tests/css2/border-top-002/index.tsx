/*
Source: imported/wpt-upstream/css/CSS2/borders/border-top-002.xht
WPT-Revision: 722934828a1f4269dea6f6763fb30d993a404cb7
Adapted-By: codex
Adapted-Date: 2026-06-24
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Title: CSS Test: Border-top set to border-style
Assert: The 'border-top' shorthand property sets the 'border-style' for the top border.
Lynx-Note: Source relies on an empty auto-width block and then sets border-top-width; TTSS uses a stable calc() width for Web body-width parity. Passes on Android device B6SKZPAA89ONCIUO at 0.3204% diff.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a dashed line."}
</text>
<view className={"test-box"}>
</view>
</view>
</>);
