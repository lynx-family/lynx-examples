/*
Source: imported/wpt-upstream/css/CSS2/borders/border-bottom-002.xht
WPT-Revision: 722934828a1f4269dea6f6763fb30d993a404cb7
Adapted-By: codex
Adapted-Date: 2026-06-24
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Title: CSS Test: Border-bottom set to border-style
Assert: The 'border-bottom' shorthand property sets the 'border-style' for the bottom border.
Lynx-Note: Source uses auto block width and 1in helper height; TTSS normalizes height to 96px and uses calc() for Web body-width parity. Passes on Android device B6SKZPAA89ONCIUO at 0.3601% diff.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a dashed line below."}
</text>
<view className={"test-box"}>
</view>
</view>
</>);
