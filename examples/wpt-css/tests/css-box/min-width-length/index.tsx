/*
Source: imported/wpt-upstream/css/CSS2/normal-flow/min-width-006.xht
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-17
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.1415%
Lynx-Note: Android screenshot diff 0.1415% in a historical pre-policy run; non-empty screenshot check passed; revalidate with web-test-render before treating as final parity evidence.
Title: CSS Test: Min-width using pixels with a nominal value, 96px
Assert: The 'min-width' property sets a nominal length value in pixels.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"Test passes if 2 black squares have the "}
<text>
{"same width"}
</text>
{"."}
</text>
<view id={"div1"} />
<view id={"div2"} />
</>);
