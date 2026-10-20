/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-106.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-04
Reference-Mode: web-test-render
Lynx-Status: passing
Evidence: docs/evidence/css2-background-shorthand-color-bottom-order-five-20260904-summary.tsv
Title: CSS Test: Background with (color position repeat image)
Assert: Background with (color position repeat image) sets the background to the color specified, with the image overlaid across the x-axis at the bottom.  The center assignment from background-position does not matter since the image is tiled across the x-axis.
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
