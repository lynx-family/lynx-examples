/*
Source: imported/wpt-upstream/css/css-flexbox/flex-wrap-002.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: failing
Title: css-flexbox: Tests that we size items in a wrapping column flexbox as fit-content
Assert: The flexbox here should have two flex lines, each 50px wide and 100px tall. The flex items overflow but are transparent.
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
{/* This makes sure that we only see green if the flex items are sized correctly */}
<view className={"__inline-001"}>
</view>
<view className={"__inline-002"}>
<view className={"__inline-003"}>
{/* These zero-height divs give the flex item has a min-content width of
         25px and a max-content width of 125px */}
<view className={"__inline-004"}>
</view>
<view className={"__inline-005"}>
</view>
<view className={"__inline-006"}>
</view>
<view className={"__inline-007"}>
</view>
<view className={"__inline-008"}>
</view>
</view>
<view className={"__inline-009"}>
<view className={"__inline-010"}>
</view>
<view className={"__inline-011"}>
</view>
<view className={"__inline-012"}>
</view>
<view className={"__inline-013"}>
</view>
<view className={"__inline-014"}>
</view>
</view>
</view>
</view>
</>);
