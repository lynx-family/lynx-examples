/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-image-003.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-16
Reference-Mode: web-test-render
Lynx-Status: failing
Evidence: docs/evidence/css2-backgrounds-cursor162-five-20260916-summary.tsv
Lynx-Issue: background-image inherit does not propagate the parent's URL image to the child, so the red fallback remains visible.
Title: CSS Test: Background-image set to 'inherit'
Assert: Background-image set to 'inherit' causes the container to use the background image of its parent.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and "}
<text className={"strong-text"}>
{"no red"}
</text>
{"."}
</text>
<view id={"div1"}>
<view id={"test"}>
</view>
</view>
</view>
</>);
