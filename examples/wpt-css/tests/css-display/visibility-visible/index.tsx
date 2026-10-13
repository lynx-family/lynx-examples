/*
Source: imported/wpt-upstream/css/CSS2/visufx/visibility-003.xht
Reference-Mode: web-test-render
WPT-Revision: d850624df
Adapted-By: agent
Adapted-Date: 2026-05-19
Lynx-Status: passing
Title: CSS Test: Visibility set to 'visible'
Assert: A block with 'visibility' set to 'visible' will be rendered on the page.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"test-description"}>
{"Test passes if there is a box below this line."}
</text>
<view className={"visible-box"}>
<text className={"box-text"}>
{"PASS PASS"}
</text>
</view>
</>);
