/*
Source: imported/wpt-upstream/css/css-backgrounds/background-none-none-and-color.html
WPT-Revision: 748511b87500
Adapted-By: codex
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: failing
Title: background-none-none-and-color
Assert: No assert provided.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body no-text"}>
<view className={"box box-blue-after"}>
</view>
<view className={"box box-reset-after"}>
</view>
<view className={"box box-blue-after scroll-box"}>
<view className={"tall-child"}>
</view>
</view>
<view className={"box box-reset-after scroll-box"}>
<view className={"tall-child"}>
</view>
</view>
</view>
</>);
