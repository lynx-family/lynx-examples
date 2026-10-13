/*
Source: imported/wpt-upstream/css/css-position/position-relative-003.html
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-18
Reference-Mode: web-test-render
Lynx-Status: partial
Lynx-Note: Replaced inline span wrappers with zero-sized view wrappers because Lynx text cannot contain view elements. position:fixed child kept as-is; Lynx supports position:fixed but behavior may differ from Web when no inset offsets are specified.
Assert: A percent inset resolves against the available size.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and "}
<text>
{"no red"}
</text>
{"."}
</text>
<view className={"container"}>
<view className={"offset-1"}>
<view className={"offset-2"}>
<view className={"green"}>
</view>
</view>
</view>
</view>
</view>
</>);
