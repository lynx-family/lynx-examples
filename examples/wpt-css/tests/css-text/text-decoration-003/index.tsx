/*
Source: imported/wpt-upstream/css/CSS2/text/text-decoration-003.xht
WPT-Revision: 58b15ec
Adapted-By: agent
Adapted-Date: 2026-07-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Text-decoration set to 'line-through'
Assert: The 'text-decoration' property set to 'line-through' renders a line through the "Filler Text" below.
Note: broad div selector scoped to .test so the .body wrapper is not styled; the div becomes a <text> since it only holds inline text.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the \"Filler Text\" below has a line through it."}
</text>
<text className={"test"}>
{"Filler Text"}
</text>
</view>
</>);
