/*
Source: imported/wpt-upstream/css/css-position/position-absolute-large-negative-inset.html
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-18
Reference-Mode: web-test-render
Lynx-Status: partial
Assert: This test verifies a box with very large negative insets within an element with will-change: transform does not affect the rendering of the element.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"__html-div"}>
</view>
<text className={"__html-span"}>
{"negative inset text"}
</text>
</view>
</>);
