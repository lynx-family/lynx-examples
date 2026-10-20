/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-201.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-10
Reference-Mode: web-test-render
Lynx-Status: failing
Evidence: docs/evidence/css2-background-shorthand-position-attachment-five-20260910-summary.tsv
Lynx-Issue: The valid position-attachment-color-repeat shorthand 'background: bottom scroll green repeat-x' is dropped entirely because background-attachment is unsupported, so its independently valid green color does not paint.
Title: CSS Test: Background with (position attachment color repeat)
Assert: Background with (position attachment color repeat) sets the background of the element to the color specified.  Repeat, position, and attachment only apply if image is set.
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
