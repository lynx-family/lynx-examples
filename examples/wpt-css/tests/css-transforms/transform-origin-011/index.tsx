/*
Source: imported/wpt-upstream/css/css-transforms/transform-origin-011.html
WPT-Revision: ce9441ee673c68c5d175d2363c9ff2e4893b827c
Adapted-By: codex
Adapted-Date: 2026-08-06
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.2072%
Evidence: docs/evidence/css-transforms-transform-origin-20260806-summary.tsv
Title: CSS Transforms Test: transform-origin - right 100%('right' computes to '100%' in horizontal position)
Assert: The 'transform-origin' property set 'right' computes to 100% for the horizontal position.
Note: The source's two absolutely positioned comparison scenes stay overlaid at Web's omitted-inset static position; only setup positioning is materialized.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"Test passes if there is a filled green square in the center of the gray square and no red."}
</text>
<view className={"scene gray-scene"}>
<view id={"test"}>
</view>
</view>
<view className={"scene"}>
<view id={"ref"}>
</view>
</view>
</view>
</>);
