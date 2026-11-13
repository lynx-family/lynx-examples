/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-attachment-applies-to-009.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-10
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Fixed background images are anchored at the element-local top instead of the viewport: Web clips the 96 CSS px image to a 24 CSS px tail at this viewport offset, while Lynx paints the full 96 CSS px image.
Evidence: docs/evidence/css2-backgrounds-local-buffer-five-20260910-summary.tsv
Title: CSS Test: Background-attachment applied to elements with 'display' set to 'block'
Assert: The 'background-attachment' property applies to elements with 'display' set to 'block'.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instruction"}>
{"Test passes if there is a short blue stripe"}
</text>
<text className={"instruction-line"}>
{"above a tall orange rectangle."}
</text>
<view className={"container"}>
<view className={"test-box"}>
</view>
</view>
</view>
</>);
