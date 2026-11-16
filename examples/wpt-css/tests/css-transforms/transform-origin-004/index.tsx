/*
Source: imported/wpt-upstream/css/css-transforms/transform-origin-004.html
WPT-Revision: 320db3b1a6cf19b4de520ad7a2f6a152faa77780
Adapted-By: agent
Adapted-Date: 2026-08-07
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0001%
Evidence: docs/evidence/css-transforms-transform-origin-deepening-20260807-summary.tsv
Title: CSS Test (Transforms): transform-origin percentages 2
Assert: A transform-origin of 101px 50% must result in the same rendering as the default of 50% 50% in this case. The content box is 200x100px, so with a 1px border, the border box is 202x102px. transform-origin is computed relative to the border box.
Note: The declaration under test ('transform-origin: 101px 50%') is verbatim; the source div selector becomes an explicit #test id. The body wrapper keeps the browser-default 8px margin on all sides because the rotated box position is offset-sensitive. Verified on Android emulator-5554 (2026-08-07) at 0.0001% diff (3 px); the rotated box matches the oracle exactly, confirming percentages resolve against the border box.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"test"}>
<text>
{"Some text!"}
</text>
</view>
</view>
</>);
