/*
Source: imported/wpt-upstream/css/css-text/text-align/text-align-006.html
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0538%
Evidence: docs/evidence/css-property-text-align-logical-20260813-summary.tsv
Title: CSS Text Test: text-align - start (basic)
Assert: The 'text-align' property set to 'start' on a block element aligns the text to the start edge.
Note: The source div becomes an explicit bordered container, and text-align: start is applied to its full-width text child because Lynx renders visible text with the text element. The tested value remains unchanged. On Android Pixel_9_Pro/emulator-5556 (2026-08-13), WebView and Lynx place the text 7 device pixels from the blue box's left edge.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"test-description"}>
{"Test passes if the words \"Filler Text\" below are aligned to the left, inside the blue box."}
</text>
<view className={"container"}>
<text className={"aligned-text"}>
{"Filler Text"}
</text>
</view>
</>);
