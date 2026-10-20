/*
Source: imported/wpt-upstream/css/CSS2/text/letter-spacing-100.xht
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0301%
Evidence: docs/evidence/css-property-letter-spacing-normal-20260813-summary.tsv
Title: CSS Test: Letter-spacing set to 'normal'
Assert: The 'letter-spacing' property set to 'normal' sets the typical spacing for letters based on the font.
Note: The pinned Ahem bytes are embedded using the repository's proven Android-compatible path. The source nested div becomes one Ahem text element with letter-spacing: normal unchanged. On Android Pixel_9_Pro/emulator-5556 (2026-08-13), WebView and Lynx use the same 144-device-pixel x bbox; this is visual initial-value evidence rather than parser-level support proof.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"Test passes if there is only one box below (with no jagged edges)."}
</text>
<text className={"sample"}>
{"xx"}
</text>
</view>
</>);
