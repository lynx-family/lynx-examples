/*
Source: imported/wpt-upstream/css/css-text-decor/text-decoration-dotted-001.html
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 7.9353%
Title: text-decoration-style: dotted visual override
Assert: text-decoration-style: dotted overrides a solid baseline so the red underlines match the WPT dotted decoration.
Lynx-Note: After setup-only nowrap and margin normalization, Lynx keeps all three bidi samples on one line but paints the same 17-device-pixel solid red band for 10px, 20px, and 30px thicknesses; WebView paints distinct 30px, 60px, and 90px dotted bands.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"Test passes if the dotted red underlines are uniform throughout each line:"}
</text>
<text className={"sample test1"}>
{"fooשלוםbaz"}
</text>
<text className={"sample test2"}>
{"fooשלוםbaz"}
</text>
<text className={"sample test3"}>
{"fooשלוםbaz"}
</text>
</view>
</>);
