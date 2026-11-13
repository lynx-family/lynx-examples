/*
Source: imported/wpt-upstream/css/CSS2/fonts/font-size-023.xht
WPT-Revision: (to be filled during import)
Adapted-By: wpt-adapter agent
Adapted-Date: 2026-05-29
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Diff: 0.0148%
Title: CSS Test: Font-size using picas with a minimum minus one value, -1pc
Assert: The 'font-size' property sets a minimum minus one length value in picas is invalid; such 'font-size' declaration should be ignored.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is no red visible on the page."}
</text>
<view id={"div1"}>
<text>
{"Filler Text"}
</text>
</view>
</view>
</>);
