/*
Source: imported/wpt-upstream/css/css-color/t32-opacity-offscreen-b.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-15
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Issue: Rspeedy compiler optimizes empty views away - multiple sibling views merged via __SetClasses
Assert: That opacity specifies compositing the contents as a single offscreen buffer.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text style={"margin-top: 8px"} className={"__ua-p"}>
{"The following five boxes should be the same color:"}
</text>
<view className={"top color"}>
</view>
<view className={"top color"}>
<view className={"color"}>
</view>
</view>
<view className={"top"}>
<view className={"color"}>
</view>
</view>
<view className={"top"}>
<view className={"color"}>
<view className={"color"}>
</view>
</view>
</view>
<view className={"top ref"}>
</view>
</view>
</>);
