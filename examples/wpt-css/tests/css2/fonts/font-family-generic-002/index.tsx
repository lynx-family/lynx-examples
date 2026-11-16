/*
Source: imported/wpt-upstream/css/CSS2/fonts/font-family-002.xht
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0370%
Title: CSS Test: Font-family set to the keyword 'serif'
Assert: The 'font-family' property set to 'serif' correctly renders the user agent's serif font.
Lynx-Note: The source Ahem fallback sentinel is embedded as a PASS/X-only subset of the repository Ahem font; the tested serif keyword is unchanged.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the words \"PASS PASS\" appear below and there is a black box below."}
</text>
<text id={"test"} className={"sample"}>
{"PASS PASS"}
</text>
<text className={"sample"}>
{"X"}
</text>
</view>
</>);
