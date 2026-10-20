/*
Source: imported/wpt-upstream/css/css-flexbox/align-items-009.html
WPT-Revision: dd432b1d351796d3f25e1d1f243ba52da16c3a0a
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Assert: A centered one-character Ahem flex item forms a filled green 100px square in the 200px-wide column flex container.
Lynx-Note: The source Ahem stylesheet is merged into TTSS as an embedded font and its font longhands are applied to the required Lynx text element. The source anonymous X text run remains one centered text flex item.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square."}
</text>
<view id={"target"}>
<text className={"item-text"}>
{"X"}
</text>
</view>
</view>
</>);
