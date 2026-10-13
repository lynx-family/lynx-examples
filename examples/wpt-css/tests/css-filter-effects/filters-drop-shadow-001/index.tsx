/*
Source: imported/wpt-upstream/css/filter-effects/filters-drop-shadow-001.html
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-12
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 1.9919%
Evidence: docs/evidence/css-property-filter-functions-20260812-summary.tsv
Lynx-Issue: filter drop-shadow() is ignored, leaving the red sentinel visible.
Title: CSS Writing Modes Test: drop-shadow offset test
Assert: A green drop shadow appears 20px right and 10px down from the green box, covering the red sentinel.
Note: The two empty source divs become views; their absolute geometry and the drop-shadow value remain unchanged. The source paragraph uses explicit Web-compatible margins. On Android Pixel_9_Pro/emulator-5556 (2026-08-12), WebView has no red pixels while Lynx retains 52,200 red pixels where the green shadow should cover the sentinel.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"You should see two green overlapping rectangles and no red."}
</text>
<view id={"ng"}>
</view>
<view id={"ok"}>
</view>
</view>
</>);
