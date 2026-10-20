/*
Source: imported/wpt-upstream/css/css-transforms/transform-origin.html
WPT-Revision: 320db3b1a6cf19b4de520ad7a2f6a152faa77780
Adapted-By: agent
Adapted-Date: 2026-08-07
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0049%
Evidence: docs/evidence/css-transforms-transform-origin-deepening-20260807-summary.tsv
Title: CSS Transforms API Test: transform-origin
Assert: The transform should change the transform-origin to the bottom right and rotate 180 degrees.
Note: The declaration under test ('transform-origin: right bottom' with 'transform: rotate(90deg)') and the absolute-position geometry (greenSquare at left: -100px) are verbatim, as is the source 'body { margin: 0 }' on the .body wrapper. The two empty source divs become views. Verified on Android emulator-5554 (2026-08-07) at 0.0049% diff (180 px); the rotated green square fully covers the red one, matching the oracle.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"The test passes if there is a green square and no red."}
</text>
<view id={"relativeContainer"}>
<view id={"redSquare"}>
</view>
<view id={"greenSquare"}>
</view>
</view>
</view>
</>);
