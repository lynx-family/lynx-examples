/*
Source: imported/wpt-upstream/css/css-position/position-fixed-root-element-flex.html
WPT-Revision: (to be filled during import)
Adapted-By: atlas
Adapted-Date: 2026-05-28
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Position: Box inset properties & position:fixed flex container as the root element
Assert: This test verifies the box inset properties on a position:fixed flex container root element.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"CSS Position: Box inset properties & position:fixed flex container as the root element"}
</text>
<text className={"__ua-p"}>
{"The black border should encompass the whole viewport,\n  with a bit of space on each side."}
</text>
<text className={"__ua-p"}>
{"It shouldn't just shrinkwrap this text's height."}
</text>
</view>
</>);
