/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-image-002.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-16
Reference-Mode: web-test-render
Lynx-Status: passing
Evidence: docs/evidence/css2-backgrounds-cursor162-five-20260916-summary.tsv
Title: CSS Test: Background-image set using the url() function
Assert: Background-image set to uri causes the image to be rendered as the background of the box.
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
