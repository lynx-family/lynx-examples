/*
Source: imported/wpt-upstream/css/css-transforms/transform-translate-001.html
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-25
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0079%
Title: CSS Test (Transforms): translate(50px, 50px)
Assert: This tests that translate(50px, 50px) is the same as relative positioning by 50px toward the bottom right.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"test-box"}>
<text>
{"Test Text"}
</text>
</view>
</>);
