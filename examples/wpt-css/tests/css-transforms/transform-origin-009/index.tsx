/*
Source: imported/wpt-upstream/css/css-transforms/transform-origin-009.html
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-12
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0234%
Evidence: docs/evidence/css-property-transform-origin-20260812-summary.tsv
Title: CSS Transforms Test: transform-origin - 0% center('center' computes to '50%' in vertical position)
Assert: The 'transform-origin' property set 'center' computes to 50%(top 50%) for the vertical position.
Note: The two absolutely positioned comparison scenes remain overlaid; top: 70px materializes Web's omitted-inset static position while leaving the transform-origin values under test unchanged. Verified on Android Pixel_9_Pro/emulator-5556 (2026-08-12) at 0.0234% diff (856 px).
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
