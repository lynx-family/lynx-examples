/*
Source: tests/css2/fonts/font-family-name-021/source.html
Original-WPT-Source: imported/wpt-upstream/css/css-fonts/font-family-name-021.xht
WPT-Revision: 09ce9a86b58452cd73977c921259e40e525def0c
Adapted-By: codex
Adapted-Date: 2026-06-10
Reference-Mode: web-test-render
Lynx-Status: skipped
Android-Status: failing
Android-Diff: 0.3070%
Title: CSS Test: mixed quoted and unquoted font family syntax is invalid
Assert: Mixing a quoted name with an unquoted portion is invalid syntax, so the font-family rule is dropped.
Lynx-Note: Kept skipped until invalid mixed quoted/unquoted font-family syntax is dropped; current Android evidence renders 5678 instead of inherited CSSTest FamilyName PASS.
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
