/*
Source: imported/wpt-upstream/css/css-text/text-align/text-align-007.html
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.1079%
Evidence: docs/evidence/css-property-text-align-logical-20260813-summary.tsv
Title: CSS Text Test: text-align - end (basic)
Assert: The 'text-align' property set to 'end' on a block element aligns the text to the end edge.
Note: The source div becomes an explicit bordered container, and text-align: end is applied to its full-width text child because Lynx renders visible text with the text element. The tested value remains unchanged. On Android Pixel_9_Pro/emulator-5556 (2026-08-13), WebView and Lynx place the text 5 and 4 device pixels from the blue box's right edge, respectively.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"test-description"}>
{"Test passes if the words \"Filler Text\" below are aligned to the right, inside the blue box."}
</text>
<view className={"container"}>
<text className={"aligned-text"}>
{"Filler Text"}
</text>
</view>
</>);
