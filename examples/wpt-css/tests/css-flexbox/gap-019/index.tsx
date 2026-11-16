/*
Source: imported/wpt-upstream/css/css-flexbox/gap-019.html
WPT-Revision: 1e91be47ac599571cde8a98b0a11cafc3a9e281c
Adapted-By: agent
Adapted-Date: 2026-09-28
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: docs/diagnostics/gap-019-webview91-20260928.md
Lynx-Note: The tested max-content width remains derived from two 10px flex bases plus the 80px column gap under wrapping; no resulting width is hardcoded. An unconstrained relative scene and explicit red-backdrop insets preserve overlap without affecting intrinsic sizing. WebView 91 paints 80px green plus 20px red, while Lynx paints the source-required 100px green; failing records the stable reference-render comparison, and no Lynx engine nonconformance is established.
Title: Flex gaps
Assert: Intrinsic max size of multiline row flex containers includes gaps
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and "}
<text className={"strong"}>
{"no red"}
</text>
{"."}
</text>
<view className={"test-scene"}>
<view id={"reference-overlapped-red"}>
</view>
<view className={"flexbox"}>
<view className={"item"}>
</view>
<view className={"item"}>
</view>
</view>
</view>
</view>
</>);
