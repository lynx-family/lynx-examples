/*
Source: imported/wpt-upstream/css/css-text-decor/text-shadow/basic.html
WPT-Revision: af38980d2fcd74af19a226f5f651051cc15940ed
Adapted-By: agent
Adapted-Date: 2026-07-23
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0088%
Android-Diff-Limit: 0.01%
Evidence: docs/evidence/todo-css-properties-20260723-summary.tsv
Title: CSS Text Decoration Test: basic text-shadow
Assert: The text-shadow property paints a gray shadow 3px right and 3px below green text.
Note: Pixel 6 Pro verification after the engine fix paints the complete gray 3px/3px shadow. The 0.01% limit passes the remaining 395-pixel cross-engine antialiasing difference while staying below the pre-fix missing-shadow result of 0.0184%.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"test"}>
{"Hello"}
</text>
</view>
</>);
