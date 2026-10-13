/*
Source: imported/wpt-upstream/css/css-text-decor/text-decoration-style-multiple.html
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 0.3769%
Title: Multiple text-decoration shorthand styles and colors
Assert: Nested decorating boxes render solid coral underline, dashed sky-blue overline, and wavy green line-through simultaneously.
Lynx-Note: Replaces unsupported nth-child selectors with explicit classes while preserving the three nested text-decoration shorthand declarations. Coral and green decoration pixels are only partial, and the exact sky-blue dashed decoration color is absent.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"scene"}>
<text className={"layer"}>
{"AAAA"}
</text>
<text className={"layer"}>
{"AAAA"}
</text>
<text className={"layer underline-solid-coral"}>
<text className={"overline-dashed-skyblue"}>
<text className={"throughline-wavy-green"}>
{"AAAA"}
</text>
</text>
</text>
</view>
</view>
</>);
