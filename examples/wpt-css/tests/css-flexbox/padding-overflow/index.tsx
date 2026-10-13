/*
Source: imported/wpt-upstream/css/css-flexbox/padding-overflow.html
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-17
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0034%
Lynx-Note: Adjusted only the helper paragraph margin so the WPT test and reference descriptions align in Lynx/WebView screenshots; the tested padding and overflow declarations are unchanged.
Assert: Item's size includes padding even when there is overflow:hidden. Chrome crashed on this.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square."}
</text>
<view className={"flex-wrapper"}>
<view className={"padded-item"}>
</view>
</view>
</>);
