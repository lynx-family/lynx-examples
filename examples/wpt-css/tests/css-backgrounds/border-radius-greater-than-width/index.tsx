/*
Source: imported/wpt-upstream/css/css-borders/border-radius-greater-than-width.html
WPT-Revision: 58b15ece0
Adapted-By: agent
Adapted-Date: 2026-07-08
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Property of 'border-[*]-radius'.
Assert: Border should also render normally when 'border-[*]-radius' are greater than width or height.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"test"}>
</view>
</view>
</>);
