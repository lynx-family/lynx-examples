/*
Source: imported/wpt-upstream/css/css-flexbox/parsing/flex-shrink-computed.html
WPT-Revision: 9bc42055a930f29289ba627ed42bfa7cd0fb7a58
Adapted-By: agent
Adapted-Date: 2026-08-24
Reference-Mode: testharness-computed-style
Lynx-Status: passing
Note: Completed collector-acknowledged testharness pass on Pixel_9_Pro (emulator-5554), 2026-08-24: flex-shrink expected and actual 1; case-local structured evidence and matching summary were materialized from LynxExample built with legacy layout-only computed-style readback fix 6d6f6549913479092de01e6168d54ef37bbee223. This non-default rerun replaces the prior default-value false positive.
Assert: Generated flex-shrink computed-style assertions for text.target.
*/
import { root } from '@lynx-js/react';
import './index.css';
import './processor';
import { useTestharness } from "../../../tools/nonvisual-runtime/react";

function invokeMainThread(name: string, input: Record<string, unknown>) {
  'main thread';
  const bridge = globalThis as typeof globalThis & Record<string, (input: Record<string, unknown>) => Record<string, unknown>>;
  if (!['start', 'poll', 'cancel'].includes(name)) throw new Error('Unknown testharness method');
  return bridge[name](input);
}

function TestCard() {
  useTestharness(invokeMainThread);
  return (<>
<text className={"target"}>
</text>
</>);
}

root.render(<TestCard />);
