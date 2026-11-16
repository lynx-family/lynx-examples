/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-090.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-03
Reference-Mode: web-test-render
Lynx-Status: passing
Evidence: docs/evidence/css2-background-shorthand-bottom-order-five-20260903-summary.tsv
Title: CSS Test: Background with (color image position repeat)
Assert: Background with (color image position repeat) sets the background to the color specified, with the image overlaid across the x-axis at the bottom.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a green rectangle on top of a blue stripe."}
</text>
<view className={"test-box"}>
</view>
</view>
</>);
