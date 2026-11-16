/*
Source: imported/wpt-upstream/css/css-flexbox/auto-height-with-flex.html
WPT-Revision: f90a67969
Adapted-By: wpt-adapter agent
Adapted-Date: 2026-05-26
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Diff: 0.0027%
Assert: This test ensures that a vertical flexbox (with auto height) and a flexitem with flex: 1; will not have 0 set to the flex basis, but to auto instead.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"__inline-001"}>
<view>
<text>
{"Header"}
</text>
</view>
<view className={"__inline-002"}>
<text>
{"Flexible content\n"}
</text>
</view>
</view>
</view>
</>);
