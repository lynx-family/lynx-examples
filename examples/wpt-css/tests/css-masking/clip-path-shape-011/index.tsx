/*
Source: imported/wpt-upstream/css/css-masking/clip-path/clip-path-shape-011.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Masking: Test clip-path property and shape function with single-value arc radius
Assert: When providing one radius value with percentage, the percentage should be relative to the diagonal.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"shape"}>
</view>
</view>
</>);
