/*
Source: tests/css2/fonts/font-family-name-024/source.html
Original-WPT-Source: imported/wpt-upstream/css/css-fonts/font-family-name-024.xht
WPT-Revision: 09ce9a86b58452cd73977c921259e40e525def0c
Adapted-By: codex
Adapted-Date: 2026-06-10
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.4001%
Title: CSS Test: system font names are not special in font-family lists
Assert: System font names are only allowed with the font shorthand, not in font-family rules.
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
<text className={"test-text pass-text"}>
{"PASS"}
</text>
<view className={"test-wrapper"}>
<text className={"test-text test-1"}>
{"FAIL"}
</text>
</view>
<view className={"test-wrapper"}>
<text className={"test-text test-2"}>
{"FAIL"}
</text>
</view>
<view className={"test-wrapper"}>
<text className={"test-text test-3"}>
{"FAIL"}
</text>
</view>
<view className={"test-wrapper"}>
<text className={"test-text test-4"}>
{"FAIL"}
</text>
</view>
<view className={"test-wrapper"}>
<text className={"test-text test-5"}>
{"FAIL"}
</text>
</view>
<view className={"test-wrapper"}>
<text className={"test-text test-6"}>
{"FAIL"}
</text>
</view>
</view>
</>);
