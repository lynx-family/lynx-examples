/*
Source: imported/wpt-upstream/css/css-transforms/transform-origin-name-003.html
WPT-Revision: 320db3b1a6cf19b4de520ad7a2f6a152faa77780
Adapted-By: agent
Adapted-Date: 2026-08-07
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0000%
Evidence: docs/evidence/css-transforms-transform-origin-deepening-20260807-summary.tsv
Title: CSS Test (Transforms): transform-origin: top
Assert: This tests that 'transform-origin: top' is the same as 'transform-origin: 50% 0%'.
Note: The declaration under test ('transform-origin: top') and the 'margin: 300px 0 0 300px' geometry are verbatim; the rotated box's right edge overflowing the viewport is a feature of the original page and the oracle clips it the same way. The body wrapper uses margin: 0 8px so the div's 300px top margin lands identically in both engines (Web collapses the 8px body margin into the 300px child margin; Lynx would add them). The empty source div becomes a view. Verified on Android emulator-5554 (2026-08-07) at 0.0000% diff (0 px); the rotated box lands pixel-identical to the oracle, confirming 'top' computes to '50% 0%'.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"test"}>
</view>
</view>
</>);
