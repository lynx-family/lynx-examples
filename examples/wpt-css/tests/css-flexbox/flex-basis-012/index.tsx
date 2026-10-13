/*
Source: imported/wpt-upstream/css/css-flexbox/flex-basis-012.html
WPT-Revision: 58b15ece027c804281a1874cbe0569cca12747e9
Adapted-By: agent
Adapted-Date: 2026-09-14
Reference-Mode: web-test-render
Lynx-Status: passing
Assert: A nested column flex item with flex-basis: 100% fills its definite 100px parent height.
Lynx-Note: The body uses a Flex column to preserve percentage measurement. Instruction text is flattened; emphasis is setup-only.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view className={"__inline-001"}>
<view className={"__inline-002"}>
<view className={"__inline-003"}>
</view>
</view>
</view>
</view>
</>);
