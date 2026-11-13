/*
Source: imported/wpt-upstream/css/css-color/t44-currentcolor-background-b.xht
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Test: currentColor (with 'background-color')
Assert: currentColor uses the color from the color property
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"This paragraph should be followed by two green blocks."}
</text>
<text id={"two"} className={"__ua-p"}>
{"This text should NOT be visible."}
</text>
<text id={"three"} className={"__ua-p"}>
{"This text should NOT be visible."}
</text>
</view>
</>);
