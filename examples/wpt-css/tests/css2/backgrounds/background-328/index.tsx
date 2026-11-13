/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-328.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-10
Reference-Mode: web-test-render
Lynx-Status: passing
Evidence: docs/evidence/css2-backgrounds-local-buffer-five-20260910-summary.tsv
Title: CSS Test: Background with inherit inheriting three values
Assert: Background set to 'inherit' works when inheriting three values.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instruction"}>
{"Test passes if there is "}
<text className={"strong-text"}>
{"no red"}
</text>
{"."}
</text>
<view className={"wrapper"}>
<view className={"test-box"}>
</view>
</view>
</view>
</>);
