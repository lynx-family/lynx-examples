/*
Source: imported/wpt-upstream/css/css-backgrounds/background-color-body-propagation-001.html
WPT-Revision: 748511b87500
Adapted-By: codex
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Backgrounds and Borders Test: propagate body background to viewport
Assert: No assert provided.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"The viewport should have a green background."}
</text>
</view>
</>);
