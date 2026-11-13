/*
Source: imported/wpt-upstream/css/css-text-decor/text-decoration-style-multiple.html
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 0.3769%
Title: text-decoration-style: dashed visual override
Assert: text-decoration-style: dashed overrides a solid baseline so the sky-blue overline matches the WPT dashed decoration.
Lynx-Note: The longhand produces no pixel change from the solid-baseline Lynx card, and the exact sky-blue overline remains absent; the strict comparison fails.
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
