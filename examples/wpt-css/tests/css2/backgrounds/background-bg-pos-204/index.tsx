/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-bg-pos-204.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-10
Reference-Mode: web-test-render
Lynx-Status: passing
Evidence: docs/evidence/css2-backgrounds-local-buffer-five-20260910-summary.tsv
Title: CSS Test: Background Position: bottom right and the viewport
Assert: The root canvas paints one fuchsia diamond at the bottom-right edge of the viewport.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instruction"}>
{"There should be a single fuchsia diamond at the bottom right of the viewport."}
</text>
</view>
</>);
