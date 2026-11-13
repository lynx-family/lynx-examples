/*
Source: imported/wpt-upstream/css/css-flexbox/flex-aspect-ratio-content-box-padding-001.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: Flex item with aspect-ratio and padding should size correctly in column flex
Assert: A flex item with aspect-ratio: 1, width: 200px, and padding: 100px in a column flex container should be 400x400 (content 200x200 + padding 100 on each side).
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"container"}>
<view className={"box"}>
</view>
</view>
</view>
</>);
