/*
Source: imported/wpt-upstream/css/css-transforms/transform-stacking-002.html
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 2.4619%
Evidence: docs/evidence/css-property-transform-none-20260813-summary.tsv
Lynx-Issue: The nested lime z-index layer paints below the later red sibling.
Title: CSS Test (Transforms): Stacking, transform: none
Assert: transform: none does not create a stacking context, so the positioned lime child with z-index: 1 paints above the later red sibling.
Note: Unsupported :first-child and :last-child selectors become explicit classes. The nested structure, 100px overlap, positioned z-index child, and transform: none value remain unchanged. On Android Pixel_9_Pro/emulator-5556 (2026-08-13), WebView renders a lime 300 x 300 device-pixel square while Lynx renders a red square at the exact same bbox.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"first-layer"}>
<view className={"lime-layer"}>
</view>
</view>
<view className={"red-layer"}>
</view>
</view>
</>);
