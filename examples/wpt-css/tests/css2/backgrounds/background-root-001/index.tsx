/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-root-001.xht
WPT-Revision: 748511b87500
Adapted-By: codex
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Background on root element
Assert: Background of the root covers the entire canvas.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body root-green"}>
<text className={"__ua-p"}>
{"Test passes if the background of this entire page is green."}
</text>
</view>
</>);
