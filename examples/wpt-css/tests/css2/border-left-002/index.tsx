/*
Source: imported/wpt-upstream/css/CSS2/borders/border-left-002.xht
WPT-Revision: 722934828a1f4269dea6f6763fb30d993a404cb7
Adapted-By: codex
Adapted-Date: 2026-06-24
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Title: CSS Test: Border-left set to border-style
Assert: The 'border-left' shorthand property properly sets the border-style for the left border.
Lynx-Note: Source uses auto block width and 1in helper height; TTSS normalizes height to 96px, adjusts content width for Web block parity, and narrows the setup-only border-width declaration to border-left-width so the adapted visual isolates the left-side border-style assertion. Passes on Android device B6SKZPAA89ONCIUO at 0.1691% diff.
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
