/*
Source: imported/wpt-upstream/css/CSS2/positioning/position-relative-017.xht
Reference-Mode: web-test-render
WPT-Revision: d850624df
Adapted-By: agent
Adapted-Date: 2026-05-19
Lynx-Status: passing
Title: CSS Test: Relative positioning and computed 'top'/'bottom' set to 'auto'
Assert: Computed values are zero when both 'top' and 'bottom' are set to 'auto'.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"test-description"}>
{"Test passes if a blue square is directly below an orange square."}
</text>
<view id={"div1"}>
<view className={"child"}>
</view>
</view>
</>);
