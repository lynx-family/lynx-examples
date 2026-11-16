/*
Source: imported/wpt-upstream/css/CSS2/fonts/font-style-002.xht
WPT-Revision: af38980d2fcd74af19a226f5f651051cc15940ed
Adapted-By: agent
Adapted-Date: 2026-07-23
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0108%
Evidence: docs/evidence/todo-css-properties-20260723-ten-more-summary.tsv
Title: CSS Test: Font-style set to 'italic'
Assert: The 'font-style' property set to 'italic' correctly renders the characters as italic text.
Note: Ahem is embedded as a base64 @font-face, matching the existing CSS2 font cards. The source div becomes a text element because it contains only the X glyph; font-style: italic remains the property under test.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a box below that appears to be slanted to one side."}
</text>
<text className={"test"}>
{"X"}
</text>
</view>
</>);
