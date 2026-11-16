/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox-definite-sizes-006.html
WPT-Revision: 58b15ece027c804281a1874cbe0569cca12747e9
Adapted-By: agent
Adapted-Date: 2026-09-15
Reference-Mode: web-test-render
Lynx-Status: passing
Assert: Item stretches to row flexbox's height when the row flexbox has a definite height but is a child of a column flexbox with an indefinite height.
Lynx-Note: Setup uses a Flex column body with cross-axis stretch to preserve Web block widths, margin: 0 8px and paragraph margin: 1em 0. The source column remains indefinite in height; the row retains height: 100px and the green item retains width: 100px with automatic stretched height.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square."}
</text>
<view className={"__inline-001"}>
<view className={"__inline-002"}>
<view className={"__inline-003"}>
</view>
</view>
</view>
</view>
</>);
