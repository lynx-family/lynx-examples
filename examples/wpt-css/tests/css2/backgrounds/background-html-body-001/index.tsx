/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-html-body-001.xht
WPT-Revision: 748511b87500
Adapted-By: codex
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Test: Background on html and body element
Assert: Background of the html element is the canvas
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the background of the entire page is green and there is a blue bar."}
</text>
</view>
</>);
