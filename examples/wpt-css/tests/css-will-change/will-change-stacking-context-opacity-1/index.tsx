/*
Source: imported/wpt-upstream/css/css-will-change/will-change-stacking-context-opacity-1.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS will-change: 'will-change: opacity' creates a stacking context
Assert: If any non-initial value of a property would create a stacking context on the element, specifying that property in will-change must create a stacking context on the element.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"wc"}>
<view id={"child"}>
</view>
</view>
</view>
</>);
