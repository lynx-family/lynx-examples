/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-163.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-09
Reference-Mode: web-test-render
Lynx-Status: failing
Evidence: docs/evidence/css2-background-shorthand-attachment-order-five-20260909-summary.tsv
Lynx-Issue: The valid attachment-color-position-repeat shorthand 'background: scroll green bottom repeat-x' is dropped entirely because background-attachment is unsupported, so its independently valid green color does not paint.
Title: CSS Test: Background with (attachment color position repeat)
Assert: Background with (attachment color position repeat) sets the background of the element to the color specified.  Repeat, position, and attachment only apply if image is set.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a "}
<text className={"strong-text"}>
{"filled green square"}
</text>
{"."}
</text>
<view className={"test-box"}>
</view>
</view>
</>);
