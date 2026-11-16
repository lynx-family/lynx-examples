/*
Source: imported/wpt-upstream/css/CSS2/normal-flow/max-height-006.xht
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-17
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.13%
Lynx-Note: Android screenshot diff 0.13% in a historical pre-policy run; non-empty screenshot check passed; revalidate with web-test-render before treating as final parity evidence.
Title: CSS Test: Max-height using pixels with a nominal value, 96px
Assert: The 'max-height' property sets a nominal length value in pixels.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"Test passes if 2 black squares have the same height."}
</text>
<view id={"div1"}>
<view id={"div2"} />
<view id={"div3"} />
</view>
</>);
