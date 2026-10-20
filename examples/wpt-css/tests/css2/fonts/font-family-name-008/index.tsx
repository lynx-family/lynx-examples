/*
Source: tests/css2/fonts/font-family-name-008/source.html
Original-WPT-Source: imported/wpt-upstream/css/css-fonts/font-family-name-008.xht
WPT-Revision: 09ce9a86b58452cd73977c921259e40e525def0c
Adapted-By: codex
Adapted-Date: 2026-06-10
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.2547%
Title: CSS Test: single quoted font family name with extra spaces should not match
Assert: A single-quoted font-family name with extra internal spaces does not match the installed font family, so the fallback family is used.
Lynx-Note: The original WPT assumes CSSTest fonts are installed. This focused adaptation embeds the same imported WPT CSSTest fonts as data URLs in both the WebView reference source and TTSS so Android WebView and Lynx compare the same font data.
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
{"1234"}
</text>
</view>
</>);
