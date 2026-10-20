/*
Source: imported/wpt-upstream/css/css-text-decor/text-decoration-line-012.xht
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 0.4580%
Android-Diff-Limit: 0%
Evidence: docs/evidence/css-property-text-decoration-line-20260813-summary.tsv
Lynx-Issue: text-decoration-line: overline has no visible effect while the shorthand control overlines correctly.
Title: CSS Text Decoration Test: text-decoration-line - overline
Assert: This test checks that 'text-decoration-line: overline' produces an horizontal line over the text.
Note: The source Mplus font is reused from the adjacent text-decoration-line-011 card. Source divs become text elements, and the tested longhand plus shorthand control remain unchanged. A 0% diff limit is required because two missing 511-device-pixel overlines occupy only 0.4580% of the full screenshot.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"Test passes if the 2 \"Text sample サンプル文\" are identical and each has a line over it."}
</text>
<text id={"test"} className={"sample"}>
{"Text sample サンプル文"}
</text>
<text id={"control"} className={"sample"}>
{"Text sample サンプル文"}
</text>
</view>
</>);
