/*
Source: imported/wpt-upstream/css/css-transforms/transform-origin-name-004.html
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-12
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0000%
Evidence: docs/evidence/css-property-transform-origin-20260812-summary.tsv
Title: CSS Test (Transforms): transform-origin: top center
Assert: This tests that 'transform-origin: top center' is the same as 'transform-origin: 50% 0%'.
Note: The declaration under test and source geometry remain verbatim. The empty source div becomes a view, and the body wrapper uses margin: 0 8px so Web's collapsed 300px top margin is reproduced without Lynx adding the default 8px body margin. Verified pixel-identical on Android Pixel_9_Pro/emulator-5556 (2026-08-12).
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"test"}>
</view>
</view>
</>);
