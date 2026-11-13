/*
Source: imported/wpt-upstream/css/css-backgrounds/hidpi/simple-bg-color.html
WPT-Revision: a86c04befa07
Adapted-By: codex
Adapted-Date: 2026-06-01
Reference-Mode: web-test-render
Lynx-Status: passing
Assert: No assert provided; verifies solid green and red background-color boxes render at their source dimensions.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"box1"}>
</view>
<view className={"box2"}>
</view>
</view>
</>);
