/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-048.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-03
Reference-Mode: web-test-render
Lynx-Status: failing
Evidence: docs/evidence/css2-background-shorthand-order-five-20260903-summary.tsv
Lynx-Issue: On the recorded NX789J Android 16 run, the authored 3px setup border occupies 10 physical pixels in Lynx versus 9 in WebView, while the same 650x49 blue stripe shifts 1px right and down. Pixelmatch counts 13,099 of 19,022 mismatches in the text region (68.86%) and 5,923 in the box region (31.14%). The shorthand semantics render correctly; the exact cross-engine text and pixel-grid cause is not proven.
Title: CSS Test: Background with (image position repeat)
Assert: Background with (image position repeat) sets the background to the image specified, repeated across the x-axis, and the image is positioned at the bottom.
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
