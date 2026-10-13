/*
Source: tests/css2/fonts/font-family-name-022/source.html
Original-WPT-Source: imported/wpt-upstream/css/css-fonts/font-family-name-022.xht
WPT-Revision: 09ce9a86b58452cd73977c921259e40e525def0c
Adapted-By: codex
Adapted-Date: 2026-06-10
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0992%
Title: CSS Test: font shorthand-like tokens do not cause font-family matching
Assert: Font shorthand parsing should not cause incorrect matching of font-family values.
Lynx-Note: The original WPT assumes CSSTest fonts are installed. This focused adaptation embeds the imported WPT CSSTest fonts as data URLs in both the WebView reference source and TTSS so Android WebView and Lynx compare the same font data. The adapted layout removes the test paragraph top margin so Web margin collapsing and Lynx non-collapsing margins do not affect the font-family assertion.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"intro"}>
{"Test fonts must be loaded:"}
<text className={"verify"}>
{"FAIL"}
</text>
</text>
<view className={"test-wrapper"}>
<text className={"test-text test-1"}>
{"PaSs"}
</text>
</view>
<view className={"test-wrapper"}>
<text className={"test-text test-4"}>
{"PaSs"}
</text>
</view>
</view>
</>);
