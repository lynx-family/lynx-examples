/*
Source: imported/wpt-upstream/css/CSS2/borders/border-width-comparison-001.xht
WPT-Revision: d8a9dbef4d9623b05c0d69a822ce8a0067cc23d2
Adapted-By: codex
Adapted-Date: 2026-06-24
Reference-Mode: web-test-render
Lynx-Status: partial
Title: CSS Test: Border-width - Relation of thin, medium, and thick
Assert: A border-width set to thin is small than a border-width that is set to medium which is smaller than a border-width that is set to thick.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the three lines get thicker from top to bottom."}
</text>
<view id={"thin"}>
</view>
<view id={"medium"}>
</view>
<view id={"thick"}>
</view>
</view>
</>);
