/*
Source: tests/css2/fonts/font-family-name-012/source.html
Original-WPT-Source: imported/wpt-upstream/css/css-fonts/font-family-name-012.xht
WPT-Revision: 09ce9a86b58452cd73977c921259e40e525def0c
Adapted-By: codex
Adapted-Date: 2026-06-10
Reference-Mode: web-test-render
Lynx-Status: skipped
Android-Status: failing
Android-Diff: 1.0329%
Lynx-Issue: SDK bug candidate - quoted CSS string escapes in font-family are not resolved before font matching.
Title: CSS Test: font family name with escaped characters
Assert: A CSS escaped character inside a quoted font-family name resolves before matching the embedded CSSTest family.
Lynx-Note: The original WPT assumes CSSTest fonts are installed. This focused adaptation embeds the same imported WPT CSSTest fonts as data URLs in both the WebView reference source and TTSS so Android WebView and Lynx compare the same font data. Kept skipped until the quoted-string escape bug is fixed.
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
<text className={"test-text"}>
{"5678"}
</text>
</view>
</>);
