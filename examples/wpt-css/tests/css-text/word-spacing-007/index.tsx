/*
Source: imported/wpt-upstream/css/CSS2/text/word-spacing-007.xht
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 0.1404%
Android-Diff-Limit: 0%
Evidence: docs/evidence/css-property-word-spacing-20260813-summary.tsv
Lynx-Issue: word-spacing: 96px is ignored; the second Ahem block stays at the default-space position.
Title: CSS Test: Word-spacing normal pixel on an element
Assert: Ensure that word-spacing 96px adds 96px (in addition to default spacing) between words in the element.
Note: The pinned Ahem bytes are embedded using the repository's proven Android-compatible path. A flex control row materializes the source inline space plus 96px span margin as setup-only geometry; the tested Ahem row keeps word-spacing: 96px unchanged. On Android Pixel_9_Pro/emulator-5556 (2026-08-13), the control's second block is at x=408 while the tested row's second block remains at x=120.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"Test passes if there are only two boxes below (with no jagged edges)."}
</text>
<view className={"control-row"}>
<text className={"glyph"}>
{"x"}
</text>
<view className={"control-space"}>
</view>
<text className={"glyph"}>
{"x"}
</text>
</view>
<text id={"test"} className={"sample"}>
{"x x"}
</text>
</view>
</>);
