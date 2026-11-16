/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-bg-pos-208.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-10
Reference-Mode: web-test-render
Lynx-Status: partial
Lynx-Partial-Reason: The 0.0297% reference-backed screenshot is a visual workaround pass, but moving the source root image to the natural-height .body bypasses root-to-canvas background propagation; this card does not establish full source-semantic coverage.
Evidence: docs/evidence/css2-backgrounds-cursor162-five-20260916-summary.tsv
Title: CSS Test: Background Position: bottom right and the viewport
Assert: The adapted natural-height body places one fuchsia diamond at its bottom right, visually aligned with the viewport's right edge at the end of the instruction line.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instruction"}>
{"There should be a single fuchsia diamond at the right of the viewport at the end of this line."}
</text>
</view>
</>);
