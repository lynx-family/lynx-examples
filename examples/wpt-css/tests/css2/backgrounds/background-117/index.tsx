/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-117.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-04
Reference-Mode: web-test-render
Lynx-Status: passing
Evidence: docs/evidence/css2-background-shorthand-image-first-five-20260904-summary.tsv
Title: CSS Test: Background with (image repeat color position)
Assert: Background with (image repeat color position) sets the background to the color specified, with the image overlaid across the x-axis at the bottom.
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
