/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-root-024.xht
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: partial
Android-Status: failing
Android-Diff: 1.3518%
Title: CSS Test: Repeating Backgrounds: Y
Assert: The background shorthand repeat-y value paints one vertical column of the cat image.
Lynx-Note: Maps the Web body-propagated canvas background to Lynx page; the tested background: url(...) repeat-y shorthand is unchanged. The full screenshot fails because the explanatory text wraps to nine WebView lines versus eight Lynx lines, while the repeated cat column's special-color pixels have identical count and bbox.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"There should be a column of cats to the left of this page."}
</text>
</view>
</>);
