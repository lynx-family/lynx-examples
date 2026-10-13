/*
Source: tests/css2/fonts/font-family-name-018/source.html
Original-WPT-Source: imported/wpt-upstream/css/css-fonts/font-family-name-018.xht
WPT-Revision: 09ce9a86b58452cd73977c921259e40e525def0c
Adapted-By: codex
Adapted-Date: 2026-06-10
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.3625%
Title: CSS Test: unknown quoted font family falls back instead of inheriting body family
Assert: When a quoted font family name is not found, font fallback occurs and the rule is not treated as invalid; the enclosed body font-family is not used.
Lynx-Note: The original WPT assumes CSSTest fonts are installed. This focused adaptation embeds the imported WPT CSSTest fonts as data URLs in both the WebView reference source and TTSS so Android WebView and Lynx compare the same font data.
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
{"PaSs"}
</text>
</view>
</>);
