/*
Source: imported/wpt-upstream/css/CSS2/borders/border-width-shorthand-004.xht
WPT-Revision: d8a9dbef4d9623b05c0d69a822ce8a0067cc23d2
Adapted-By: codex
Adapted-Date: 2026-06-24
Reference-Mode: web-test-render
Lynx-Status: partial
Title: CSS Test: Border-width set using four values
Assert: Applying four values to the border-width property applies the values top, right, bottom, left, respectively.
Lynx-Note: Source uses 1in as helper height geometry; TTSS normalizes it to 96px and uses calc() to preserve the Web block auto-width visual.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the four borders are all different widths and they get wider starting from the top, to the right, to the bottom and to the left."}
</text>
<view className={"test-box"}>
</view>
</view>
</>);
