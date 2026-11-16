/*
Source: imported/wpt-upstream/css/css-text-decor/text-decoration-style-multiple.html
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 0.4025%
Title: text-decoration-style: solid visual override
Assert: text-decoration-style: solid overrides a dashed baseline so the coral underline matches the WPT solid decoration.
Lynx-Note: The longhand changes the dashed baseline, but the resulting coral underline is 9 device pixels high instead of WebView's 15 and the full strict comparison fails.
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
