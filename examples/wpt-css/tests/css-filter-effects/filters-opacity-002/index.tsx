/*
Source: imported/wpt-upstream/css/filter-effects/filters-opacity-002-test.html
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-12
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 9.8786%
Evidence: docs/evidence/css-property-filter-functions-20260812-summary.tsv
Lynx-Issue: filter opacity(0) is ignored, leaving the red sentinel visible.
Title: CSS Filter Test: Test opacity shorthand with value 0
Assert: CSS opacity filter makes the red box fully transparent at opacity(0), leaving only the green box visible.
Note: The empty source divs become views, the source geometry and filter value remain unchanged, and the source paragraph uses explicit Web-compatible margins. On Android Pixel_9_Pro/emulator-5556 (2026-08-12), WebView has no red pixels while Lynx retains the complete 600 x 600 device-pixel red box.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test filter opacity CSS shorthand. You should see a green box."}
</text>
<view className={"box1"}>
</view>
<view className={"box2"}>
</view>
</view>
</>);
