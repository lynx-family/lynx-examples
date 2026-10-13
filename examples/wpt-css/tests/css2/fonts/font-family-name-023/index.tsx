/*
Source: tests/css2/fonts/font-family-name-023/source.html
Original-WPT-Source: imported/wpt-upstream/css/css-fonts/font-family-name-023.xht
WPT-Revision: 09ce9a86b58452cd73977c921259e40e525def0c
Adapted-By: codex
Adapted-Date: 2026-06-10
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0554%
Title: CSS Test: font family names that look like font shorthand still match
Assert: Font family names that appear similar to font shorthand should match to fonts with those names.
Lynx-Note: The original WPT assumes CSSTest fonts are installed. This focused adaptation embeds the imported WPT CSSTest fonts as data URLs in both the WebView reference source and TTSS so Android WebView and Lynx compare the same font data. Additional @font-face aliases point the shorthand-like family names at the same CSSTest FamilyName font so the case still tests font-family parsing without requiring system-installed test fonts. The adapted layout removes the test paragraph top margin so Web margin collapsing and Lynx non-collapsing margins do not affect the font-family assertion.
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
<text className={"test-text test-1a"}>
{"PaSs"}
</text>
</view>
<view className={"test-wrapper"}>
<text className={"test-text test-2"}>
{"PaSs"}
</text>
</view>
<view className={"test-wrapper"}>
<text className={"test-text test-2a"}>
{"PaSs"}
</text>
</view>
<view className={"test-wrapper"}>
<text className={"test-text test-3a"}>
{"PaSs"}
</text>
</view>
</view>
</>);
