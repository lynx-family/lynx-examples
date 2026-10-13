/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-bg-pos-206.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-10
Reference-Mode: web-test-render
Lynx-Status: failing
Evidence: docs/evidence/css2-backgrounds-cursor162-five-20260916-summary.tsv
Lynx-Issue: The required fixed root background image is not painted; background-attachment is unsupported and removing fixed would narrow the test.
Title: CSS Test: Background Position: bottom right and the viewport (fixed)
Assert: The root canvas paints one fuchsia diamond at the bottom-right edge of the viewport while preserving the fixed background attachment under test.
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
