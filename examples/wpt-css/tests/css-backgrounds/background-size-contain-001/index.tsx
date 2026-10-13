/*
Source: imported/wpt-upstream/css/css-backgrounds/background-size-contain-001.html
WPT-Revision: af38980d2fcd74af19a226f5f651051cc15940ed
Adapted-By: agent
Adapted-Date: 2026-07-23
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0465%
Evidence: docs/evidence/todo-css-properties-20260723-ten-more-summary.tsv
Title: CSS Backgrounds and Borders Test: background-size - contain keyword value
Assert: Check if 'background-size' is 'contain' that it scales the background-image, while preserving its intrinsic aspect ratio (it is 1:1 in this test), to the largest size such that both its width and its height can fit inside the background positioning area. In this test, the background-image should be scaled to become 100px by 100px.
Note: The WPT bitmap is bundled case-locally; explicit ID selectors avoid styling the generated Lynx wrapper while preserving the contain value, content-box sizing, and overlap geometry.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view id={"ref-overlapped-red"}>
</view>
<view id={"test-overlapping-green"}>
</view>
</view>
</>);
