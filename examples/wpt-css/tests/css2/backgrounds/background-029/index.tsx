/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-029.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-03
Reference-Mode: web-test-render
Lynx-Status: passing
Evidence: docs/evidence/css2-background-shorthand-five-20260903-summary.tsv
Title: CSS Test: Background with (color repeat image)
Assert: Background with (color repeat image) sets the background of the element to the color specified and places the image in its initial position repeating across the x-axis.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a blue stripe above a green rectangle across the page."}
</text>
<view className={"test-box"}>
</view>
</view>
</>);
