/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox-justify-content-horiz-001a.xhtml
WPT-Revision: 1e91be47ac599571cde8a98b0a11cafc3a9e281c
Adapted-By: agent
Adapted-Date: 2026-09-30
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Testing 'justify-content' in a horizontal flex container
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
{/* default (start) */}
<view className={"flexbox"}>
<view className={"a"} />
</view>
<view className={"flexbox"}>
<view className={"a"} />
<view className={"b"}>
</view>
</view>
<view className={"flexbox"}>
<view className={"a"} />
<view className={"b"} />
<view className={"c"} />
</view>
{/* flex-start */}
<view className={"flexbox __inline-001"}>
<view className={"a"} />
</view>
<view className={"flexbox __inline-002"}>
<view className={"a"} />
<view className={"b"} />
</view>
<view className={"flexbox __inline-003"}>
<view className={"a"} />
<view className={"b"} />
<view className={"c"} />
</view>
{/* flex-end */}
<view className={"flexbox __inline-004"}>
<view className={"a"} />
</view>
<view className={"flexbox __inline-005"}>
<view className={"a"} />
<view className={"b"} />
</view>
<view className={"flexbox __inline-006"}>
<view className={"a"} />
<view className={"b"} />
<view className={"c"} />
</view>
{/* center */}
<view className={"flexbox __inline-007"}>
<view className={"a"} />
</view>
<view className={"flexbox __inline-008"}>
<view className={"a"} />
<view className={"b"} />
</view>
<view className={"flexbox __inline-009"}>
<view className={"a"} />
<view className={"b"} />
<view className={"c"} />
</view>
{/* space-between */}
<view className={"flexbox __inline-010"}>
<view className={"a"} />
</view>
<view className={"flexbox __inline-011"}>
<view className={"a"} />
<view className={"b"} />
</view>
<view className={"flexbox __inline-012"}>
<view className={"a"} />
<view className={"b"} />
<view className={"c"} />
</view>
{/* space-around */}
<view className={"flexbox __inline-013"}>
<view className={"a"} />
</view>
<view className={"flexbox __inline-014"}>
<view className={"a"} />
<view className={"b"} />
</view>
<view className={"flexbox __inline-015"}>
<view className={"a"} />
<view className={"b"} />
<view className={"c"} />
</view>
{/* space-evenly */}
<view className={"flexbox __inline-016"}>
<view className={"a"} />
</view>
<view className={"flexbox __inline-017"}>
<view className={"a"} />
<view className={"b"} />
</view>
<view className={"flexbox __inline-018"}>
<view className={"a"} />
<view className={"b"} />
<view className={"c"} />
</view>
{/* left */}
<view className={"flexbox __inline-019"}>
<view className={"a"} />
</view>
<view className={"flexbox __inline-020"}>
<view className={"a"} />
<view className={"b"} />
</view>
<view className={"flexbox __inline-021"}>
<view className={"a"} />
<view className={"b"} />
<view className={"c"} />
</view>
{/* right */}
<view className={"flexbox __inline-022"}>
<view className={"a"} />
</view>
<view className={"flexbox __inline-023"}>
<view className={"a"} />
<view className={"b"} />
</view>
<view className={"flexbox __inline-024"}>
<view className={"a"} />
<view className={"b"} />
<view className={"c"} />
</view>
</view>
</>);
