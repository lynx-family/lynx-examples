/*
Source: imported/wpt-upstream/css/css-transforms/transform-origin-007.html
WPT-Revision: af38980d2fcd74af19a226f5f651051cc15940ed
Adapted-By: agent
Adapted-Date: 2026-07-23
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0234%
Evidence: docs/evidence/todo-css-properties-20260723-summary.tsv
Title: CSS Transforms Test: transform-origin - 50% bottom('bottom' computes to '100%' in vertical position)
Assert: The 'transform-origin' property set 'bottom' computes to 100% for the vertical position.
Note: The source's two absolutely positioned comparison scenes remain overlaid; top: 70px materializes Web's omitted-inset static position, while the transform-origin values under comparison remain unchanged.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"Test passes if there is a filled green square in the "}
<text className={"strong"}>
{"center"}
</text>
{" of the gray square and no red."}
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
