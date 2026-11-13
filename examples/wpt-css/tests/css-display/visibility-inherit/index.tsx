/*
Source: imported/wpt-upstream/css/CSS2/visufx/visibility-004.xht
Reference-Mode: web-test-render
WPT-Revision: d850624df
Adapted-By: agent
Adapted-Date: 2026-05-19
Lynx-Status: passing
Title: CSS Test: Visibility set to 'inherit'
Assert: A block can inherit its 'visibility' behavior from its parent container.
Note: 1in dimensions normalized to 96px.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"test-description"}>
{"Test passes if the blue and orange boxes below are not touching and there is no red visible on the page."}
</text>
<view className={"box"} id={"div1"}>
</view>
<view className={"box"} id={"div2"}>
<view className={"inner-box"}>
<text className={"hidden-text"}>
{"FAIL FAIL"}
</text>
</view>
</view>
<view className={"box"} id={"div3"}>
</view>
</>);
