/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-078.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-03
Reference-Mode: web-test-render
Lynx-Status: passing
Evidence: docs/evidence/css2-background-shorthand-bottom-order-five-20260903-summary.tsv
Title: CSS Test: Background with (position image repeat)
Assert: Background with (position image repeat) sets the background to the image specified, repeated across the x-axis, and the image is positioned at the bottom.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a blue stripe inside the hollow black square, positioned at the bottom of the black square."}
</text>
<view className={"test-box"}>
</view>
</view>
</>);
