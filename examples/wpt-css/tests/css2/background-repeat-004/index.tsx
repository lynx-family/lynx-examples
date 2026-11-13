/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-repeat-004.xht
WPT-Revision: 58b15ec
Adapted-By: agent
Adapted-Date: 2026-07-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Background-repeat set to 'no-repeat'
Assert: Background-repeat set to 'no-repeat' does not repeat the image; there is a small filled blue square in the upper-left corner of the filled black rectangle.
Note: support/blue15x15.png copied case-locally (same pattern as tests/css-backgrounds/background-image-001); div given width: 100% because Lynx linear layout does not auto-fill parent width like Web block flow.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a small filled blue square in the upper-left corner of the filled black rectangle."}
</text>
<view className={"test"}>
</view>
</view>
</>);
