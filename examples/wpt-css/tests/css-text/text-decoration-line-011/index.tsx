/*
Source: imported/wpt-upstream/css/css-text-decor/text-decoration-line-011.xht
WPT-Revision: af38980d2fcd74af19a226f5f651051cc15940ed
Adapted-By: agent
Adapted-Date: 2026-07-23
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 0.3164%
Android-Diff-Limit: 0%
Evidence: docs/evidence/todo-css-properties-20260723-summary.tsv
Lynx-Issue: text-decoration-line: underline has no visible effect while the text-decoration shorthand control underlines correctly.
Title: CSS Text Decoration Test: text-decoration-line - underline
Assert: This test checks that 'text-decoration-line: underline' produces an horizontal line under the text (underlined).
Note: The source Mplus font is bundled case-locally; a 0% diff limit is used because the missing underline is sparse enough that the normal 0.5% full-screen threshold would produce a false pass.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"Test passes if the 2 \"Text sample サンプル文\" are "}
<text className={"strong"}>
{"identical"}
</text>
{" and "}
<text className={"strong"}>
{"underlined"}
</text>
{"."}
</text>
<text id={"test"} className={"sample"}>
{"Text sample サンプル文"}
</text>
<text id={"control"} className={"sample"}>
{"Text sample サンプル文"}
</text>
</view>
</>);
