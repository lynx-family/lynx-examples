/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox-align-items-center-nested-001.html
WPT-Revision: 58b15ece027c804281a1874cbe0569cca12747e9
Adapted-By: agent
Adapted-Date: 2026-09-14
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Flexbox nested containers with align-items: center and flexible items
Assert: Nested flexible containers resolve percentage heights and vertically center a 200px child within a 400px containing block.
Lynx-Note: The body wrapper preserves the source zero margin and 400px positioned containing block.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"container-0"}>
<view className={"container-1"}>
<view className={"container-2"}>
<view className={"content"}>
</view>
</view>
</view>
</view>
</view>
</>);
