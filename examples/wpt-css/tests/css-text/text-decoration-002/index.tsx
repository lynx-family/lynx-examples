/*
Source: imported/wpt-upstream/css/CSS2/text/text-decoration-002.xht
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 0.0935%
Android-Diff-Limit: 0%
Evidence: docs/evidence/css-property-text-decoration-shorthand-20260813-summary.tsv
Lynx-Issue: A standalone text-decoration: overline does not render a visible line.
Title: CSS Test: Text-decoration set to 'overline'
Assert: The 'text-decoration' property set to 'overline' renders the appropriate decorations.
Note: The source div becomes a text element so Lynx paints the decoration on visible text; the overline shorthand remains unchanged. A strict 0% limit is required because WebView's missing 205-device-pixel overline occupies only 0.0935% of the full screenshot.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the \"Filler Text\" below has a line over it."}
</text>
<text className={"target"}>
{"Filler Text"}
</text>
</view>
</>);
