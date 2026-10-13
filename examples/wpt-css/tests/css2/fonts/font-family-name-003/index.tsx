/*
Source: tests/css2/fonts/font-family-name-003/source.html
Original-WPT-Source: imported/wpt-upstream/css/css-fonts/font-family-name-003.xht
WPT-Revision: 09ce9a86b58452cd73977c921259e40e525def0c
Adapted-By: codex
Adapted-Date: 2026-06-10
Reference-Mode: web-test-render
Lynx-Status: skipped
Android-Status: failing
Android-Diff: 0.2428%
Title: CSS Test: font family name with no quotes, mixed case
Assert: A mixed-case unquoted font-family name matches the embedded CSSTest family before fallback.
Lynx-Note: Kept skipped until custom font-family matching treats family names case-insensitively; current Android evidence renders FAIL.
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
