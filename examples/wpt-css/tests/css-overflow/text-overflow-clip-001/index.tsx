/*
Source: imported/wpt-upstream/css/css-ui/text-overflow-001.html
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0940%
Evidence: docs/evidence/css-property-text-overflow-clip-20260813-summary.tsv
Title: CSS Basic User Interface Test: text-overflow - clip - the text inline content overflows will be broken
Assert: Inline content that overflows the 120px box is clipped, including partially rendered characters at the edge.
Note: The pinned Ahem bytes are embedded using the repository's proven Android-compatible path. The source span becomes one 30px Ahem text element carrying the resolved width, nowrap, hidden overflow, and text-overflow: clip declarations. On Android Pixel_9_Pro/emulator-5556 (2026-08-13), WebView and Lynx render an identical 360 x 90 device-pixel black rectangle at the same bbox.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"Test passes if there is a black rectangle below."}
</text>
<text className={"clip-text"}>
{"Test checks the content broken if the content overflows the container"}
</text>
</view>
</>);
