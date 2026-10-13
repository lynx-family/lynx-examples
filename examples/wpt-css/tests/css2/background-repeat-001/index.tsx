/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-repeat-001.xht
WPT-Revision: af38980d2fcd74af19a226f5f651051cc15940ed
Adapted-By: agent
Adapted-Date: 2026-07-23
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.157%
Evidence: docs/evidence/todo-css-properties-20260723-ten-more-summary.tsv
Title: CSS Test: Background-repeat set to 'repeat'
Assert: Background-repeat set to 'repeat' causes the background image for the element to tile horizontally and vertically.
Note: The WPT bitmap is bundled case-locally. The original block is targeted by class so the generated Lynx body wrapper is not styled; a column flex wrapper reproduces Web block stretching while background-repeat: repeat and content-box geometry remain unchanged.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the area inside the black rectangle is blue."}
</text>
<view className={"test"}>
</view>
</view>
</>);
