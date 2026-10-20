/*
Source: imported/wpt-upstream/css/css-color/currentcolor-005.html
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-20
Reference-Mode: web-test-render
Lynx-Status: passing
Title: column-rule-color that depend on currentcolor should be recomputed when currentcolor changes
Assert: Others depend on currentcolor should be recomputed when currentcolor changes.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"column-rule-color-currentcolor"} className={"column-case"}>
<text>
{"XXX"}
</text>
<text>
{"YYY"}
</text>
</view>
<view id={"column-rule-color-color-mix-currentcolor"} className={"column-case"}>
<text>
{"XXX"}
</text>
<text>
{"YYY"}
</text>
</view>
</view>
</>);
