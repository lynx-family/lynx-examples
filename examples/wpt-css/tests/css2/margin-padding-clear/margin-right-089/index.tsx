/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/margin-right-089.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: (passing|failing|skipped|partial)
Title: CSS Test: Margin-right using 'ex' units with a zero value, 0ex
Assert: The 'margin-right' property sets a zero length value in 'ex' units.
Lynx-Adaptation:
  - float: left replaced with display:flex + width:fit-content to simulate shrink-wrap
  - height: 1in converted to 96px (1in = 96px)
  - margin-right: 0ex converted to 0px (ex unit unsupported, value is zero)
  - Ahem font reference removed (not available in Lynx)
  - Added * { box-sizing: content-box; } to match Web content-box default
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is "}
<text>
{"no space between"}
</text>
{" the blue and orange lines."}
</text>
<view id={"div1"}>
<view>
</view>
</view>
</view>
</>);
