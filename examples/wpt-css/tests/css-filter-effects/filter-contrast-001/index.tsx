/*
Source: imported/wpt-upstream/css/filter-effects/filter-contrast-001.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Filter contrast: CSS contrast filter shotrhand
Assert: CSS contrast filter will apply a component transfer to the div element to adjust the
    contrast of the colors. Since contrast is 100%, it will leave unchanged.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"The test passes if there is a green box."}
</text>
<view className={"test-target"}>
</view>
</view>
</>);
