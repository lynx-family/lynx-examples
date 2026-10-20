/*
Source: imported/wpt-upstream/css/filter-effects/filter-grayscale-001.html
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-12
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0249%
Evidence: docs/evidence/css-property-filter-functions-20260812-summary.tsv
Title: CSS Filter Test: apply a filter to a div with background-color
Assert: The background color of an div element change when a grayscale filter apply
Note: The empty source divs become views, the source geometry and filter value remain unchanged, and the source paragraph uses explicit Web-compatible margins. Verified on Android Pixel_9_Pro/emulator-5556 (2026-08-12): WebView and Lynx render the same 90 x 90 device-pixel gray box with dominant color rgb(18, 18, 18).
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"The test passes if the little box looks grey."}
</text>
<view className={"testzone"}>
<view className={"box filter"}>
</view>
</view>
</view>
</>);
