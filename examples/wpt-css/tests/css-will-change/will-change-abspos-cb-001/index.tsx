/*
Source: imported/wpt-upstream/css/css-will-change/will-change-abspos-cb-001.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: will-change: position turns an element in an abspos containing block.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"container"}>
<view className={"abspos"}>
</view>
</view>
</view>
</>);
