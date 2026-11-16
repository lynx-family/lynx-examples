/*
Source: imported/wpt-upstream/css/css-text/word-break/word-break-break-all-010.html
WPT-Revision: 58b15ec
Adapted-By: agent
Adapted-Date: 2026-07-22
Reference-Mode: web-test-render
Lynx-Status: passing
Assert: The word is broken even if pre-wrap provides a former breaking opportunity in leading white-space, so the green test glyphs exactly cover the red reference glyphs (filled green square, no red).
Title: CSS Text Test: word-break: break-all
Note: Ahem font embedded as base64 @font-face (same as tests/css-text/white-space-001). ch is unsupported in Lynx, so width: 5ch is converted to width: 100px (with Ahem every glyph advance, including '0', is exactly 1em = 20px, so 5ch == 5 * 20px; setup geometry, not the property under test). The leading space in " XXXXX" is the assert's "former breaking opportunity" and is encoded as &#32; in both the test text and the red reference, because the TTML compiler trims leading literal whitespace in <text> content (with a plain space the text compiled to "XXXXX" = exactly 100px and never wrapped, leaving the line-2 red glyph visible). word-break: break-all kept verbatim; with correct geometry Lynx wraps " XXXX"/"X" and the assert passes at 0.1828% (emulator-5554, 2026-07-22). Caveat: this sample alone cannot isolate break-all from a Lynx default break-anywhere behavior; a word-break: normal contrast case would be needed for property-level proof. <br> split into two <text> elements.
History: 2026-07-22 first run failed at 0.2813% raw diff due to the trimmed leading space (misattributed to word-break being unsupported); corrected the same day after geometry analysis.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view className={"red"}>
<text className={"red-line"}>
{" XXXX"}
</text>
<text className={"red-line"}>
{"X"}
</text>
</view>
<text className={"test"}>
{" XXXXX"}
</text>
</view>
</>);
