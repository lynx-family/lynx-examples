/*
Source: imported/wpt-upstream/css/css-flexbox/align-content-006.htm
WPT-Revision: 58b15ece027c804281a1874cbe0569cca12747e9
Adapted-By: agent
Adapted-Date: 2026-09-14
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: A multi-line flex container with the 'align-content' property set to 'stretch'
Assert: This test checks that a multi-line flex container with 'align-content: stretch' stretches lines to take up the remaining space.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is no red visible on the page."}
</text>
<view id={"flexbox"}>
<view>
</view>
<view>
</view>
<view>
</view>
<view>
</view>
</view>
</view>
</>);
