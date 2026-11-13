/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/padding-bottom-applies-to-002.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-18
Reference-Mode: web-test-render
Lynx-Status: skipped
Lynx-Issue: display: table-header-group is unsupported in Lynx. This test's core assertion relies on table display values which do not exist in Lynx. Cannot be faithfully ported — the adapted assertion (padding-bottom applies to block-level elements) is already covered by passing padding-bottom-003 and padding-bottom-007.
Title: CSS Test: Padding-bottom applied to element with display table-header-group
Assert: The 'padding-bottom' property does not apply to elements with a display of table-header-group. SKIPPED: table display values are unsupported in Lynx.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is "}
<text>
{"space between"}
</text>
{" the blue and orange lines."}
</text>
<view id={"wrapper"}>
<view id={"test"}>
<view id={"inner"}>
</view>
</view>
</view>
</view>
</>);
