/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-182.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-09
Reference-Mode: web-test-render
Lynx-Status: passing
Evidence: docs/evidence/css2-background-shorthand-attachment-order-next-five-20260910-summary.tsv
Title: CSS Test: Background with (position color image repeat)
Assert: Background with (position color image repeat) sets the background to the color specified, with the image overlaid across the x-axis at the bottom.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is an orange rectangle above a blue stripe."}
</text>
<view className={"test-box"}>
</view>
</view>
</>);
