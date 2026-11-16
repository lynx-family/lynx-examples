/*
Source: imported/wpt-upstream/css/css-flexbox/flex-wrap-001.html
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-11
Reference-Mode: web-test-render
Lynx-Status: passing
Assert: flex-wrap: wrap causes items to wrap to next line
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"page"}>
<view className={"container"}>
<view className={"item"} />
<view className={"item"} />
<view className={"item"} />
<view className={"item"} />
<view className={"item"} />
<view className={"item"} />
</view>
</view>
</>);
