/*
Source: imported/wpt-upstream/css/CSS2/text/text-decoration-065.xht
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0629%
Evidence: docs/evidence/css-property-text-decoration-shorthand-20260813-summary.tsv
Title: CSS Test: Text-decoration set to 'none'
Assert: The 'text-decoration' property set to 'none' does not render any text decorations.
Note: The source div becomes a text element. The cascading underline followed by none remains unchanged, making this a visible shorthand reset test rather than a default no-decoration sample. Verified on Android Pixel_9_Pro/emulator-5556 (2026-08-13); core-region audit confirms neither WebView nor Lynx has a continuous decoration line.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the words \"Filler Text\" below does not blink, has no line over it, has no line under it and has no line through it."}
</text>
<text className={"target"}>
{"Filler Text"}
</text>
</view>
</>);
