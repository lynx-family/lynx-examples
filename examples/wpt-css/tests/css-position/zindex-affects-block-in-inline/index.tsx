/*
Source: imported/wpt-upstream/css/CSS2/stacking-context/zindex-affects-block-in-inline.html
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-17
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.4477%
Lynx-Note: Mapped the WPT span wrapper to a view because Lynx does not allow a view child inside text; the positioned z-index ordering under test is preserved.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"red-layer"}>
</view>
<view className={"green-layer-wrapper"}>
<view className={"green-layer"}>
</view>
</view>
</>);
