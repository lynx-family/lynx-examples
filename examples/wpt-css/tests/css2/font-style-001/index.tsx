/*
Source: imported/wpt-upstream/css/CSS2/fonts/font-style-001.xht
WPT-Revision: 58b15ec
Adapted-By: agent
Adapted-Date: 2026-07-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Font-style set to 'normal'
Assert: The 'font-style' property set to 'normal' (overriding an earlier italic declaration) renders the character upright, not slanted.
Note: Ahem font embedded as base64 @font-face (same as tests/css-text/white-space-001). The duplicate font-style declarations are kept in source order to preserve the tested cascade (normal wins). The div becomes a <text> since it only holds the "X" character.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a box below that appears upright, and not slanted to one side."}
</text>
<text className={"test"}>
{"X"}
</text>
</view>
</>);
