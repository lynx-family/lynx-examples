/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-image-transparency-001.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-16
Reference-Mode: web-test-render
Lynx-Status: passing
Evidence: docs/evidence/css2-backgrounds-cursor162-five-20260916-summary.tsv
Title: CSS Test: Transparent background-image with background-color
Assert: Background-image set to a transparent image causes the 'background-color' to shine through.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green rectangle across the page."}
</text>
<view className={"test-box"}>
</view>
</view>
</>);
