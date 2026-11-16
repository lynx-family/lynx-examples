/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/margin-right-applies-to-002.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: skipped
Title: CSS Test: Margin-right applied to element with display table-header-group
Assert: The 'margin-right' property applies to elements with a display of table-header-group.
Lynx-Note: display: table-header-group is unsupported in Lynx.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test skipped: display: table-header-group is not supported in Lynx."}
</text>
</view>
</>);
