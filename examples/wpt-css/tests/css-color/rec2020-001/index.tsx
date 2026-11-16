/*
Source: imported/wpt-upstream/css/css-color/rec2020-001.html
WPT-Revision: 269bca0dd35c303639f3c9cf1d8bcb3d911bdb60
Adapted-By: agent
Adapted-Date: 2026-09-20
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Both mobile WebView and Lynx render the red fallback instead of the asserted green; the 0.0901% runner pass is semantically overridden to failing (docs/diagnostics/css-color-modern-spaces-20260920.md).
Title: CSS Color 4: rec2020
Assert: rec2020 with no alpha
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if you see a green square, and no red."}
</text>
<view className={"test"}>
</view>
</view>
</>);
