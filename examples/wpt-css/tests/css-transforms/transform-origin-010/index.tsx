/*
Source: imported/wpt-upstream/css/css-transforms/transform-origin-010.html
WPT-Revision: 320db3b1a6cf19b4de520ad7a2f6a152faa77780
Adapted-By: agent
Adapted-Date: 2026-08-07
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0234%
Evidence: docs/evidence/css-transforms-transform-origin-deepening-20260807-summary.tsv
Title: CSS Transforms Test: transform-origin - left 0%('left' computes to '0%' in horizontal position)
Assert: The 'transform-origin' property set 'left' computes to 0% for the horizontal position.
Note: The source's two absolutely positioned comparison scenes remain overlaid; top: 70px materializes Web's omitted-inset static position, while the transform-origin values under comparison remain unchanged. Verified on Android emulator-5554 (2026-08-07) at 0.0234% diff (856 px); the green square covers the red one exactly as the oracle renders.
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
