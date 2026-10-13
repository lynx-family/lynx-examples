/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-attachment-009.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-10
Reference-Mode: web-test-render
Lynx-Status: passing
Evidence: docs/evidence/css2-backgrounds-local-buffer-five-20260910-summary.tsv
Title: CSS Test: Background Positioning Test
Assert: The positioned repeating red background is fully covered by the offset lime image, so the result contains one lime square and no red.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instruction"}>
{"There should be a lime square below and no red."}
</text>
<view className={"test-box"}>
<image className={"lime-swatch"} src={"support/swatch-lime.png"} />
</view>
</view>
</>);
