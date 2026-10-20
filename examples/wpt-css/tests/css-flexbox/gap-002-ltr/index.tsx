/*
Source: imported/wpt-upstream/css/css-flexbox/gap-002-ltr.html
WPT-Revision: 58b15ec
Adapted-By: agent
Adapted-Date: 2026-07-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: gap - vertical
Assert: The 'gap' property puts space exclusively between the column flex items, so the green container background shows as a horizontal line between the grey boxes.
Note: section > div child selector converted to an explicit class; block-size mapped to height (horizontal-tb LTR); container given width: 100% because Lynx linear layout does not auto-fill parent width like Web block flow.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a green horizontal line between boxes."}
</text>
<view className={"container"}>
<view className={"item"}>
</view>
<view className={"item"}>
</view>
<view className={"item"}>
</view>
</view>
</view>
</>);
