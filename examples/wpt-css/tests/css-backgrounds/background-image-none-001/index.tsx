/*
Source: imported/wpt-upstream/css/CSS2/css1/c533-bgimage-001.xht
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.1879%
Title: CSS Test: background-image
Assert: background-image: none overrides the paragraph's red image sentinel so only green text remains on white.
Lynx-Note: Maps the source paragraph to a structural view wrapping text so the background-image cascade is tested on a drawable block container. WebView and Lynx both contain zero red sentinel pixels.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"test-paragraph two"}>
<text>
{"This text should be green."}
</text>
</view>
</view>
</>);
