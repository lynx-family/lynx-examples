/*
Source: imported/wpt-upstream/css/css-flexbox/flex-minimum-height-flex-items-026.html
WPT-Revision: 269bca0dd35c303639f3c9cf1d8bcb3d911bdb60
Adapted-By: agent
Adapted-Date: 2026-09-20
Reference-Mode: web-test-render
Lynx-Status: passing
Assert: Child in nested column flexbox's grows to its parent's flex height, not its parent's specified height.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square."}
</text>
<view className={"flexbox column __inline-001"}>
{/* min-height: auto resolves to 0 because content-size suggestion is 0. */}
<view className={"flexbox column __inline-002"}>
{/* min-height: auto resolves to 0 because content-size suggestion is 0. */}
<view className={"__inline-003"}>
</view>
</view>
</view>
</view>
</>);
