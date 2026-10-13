/*
Source: imported/wpt-upstream/css/css-text/word-break/word-break-normal-en-000.html
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0332%
Title: word-break: normal, latin
Assert: word-break: normal means words break according to their customary rules.
Lynx-Note: Materializes the source script's invisible sentenceWidth-minus-5 setup as a 300px target text width, which keeps the first three words together and wraps the final word at the ordinary space; word-break: normal is unchanged. The second box removes its setup-only top margin because Web collapses the adjacent 20px margins while Lynx adds them.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text id={"instructions"}>
{"Test passes if the two orange boxes are the same."}
</text>
<view className={"comparison-box test"}>
<text id={"testspan"} className={"sample-line"}>
{"Latin latin latin latin"}
</text>
</view>
<view className={"comparison-box ref"}>
<text className={"sample-line"}>
{"Latin latin latin"}
</text>
<text className={"sample-line"}>
{"latin"}
</text>
</view>
</view>
</>);
