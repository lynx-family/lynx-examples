/*
Source: imported/wpt-upstream/css/css-flexbox/parsing/flex-direction-computed.html
WPT-Revision: 9bc42055a930f29289ba627ed42bfa7cd0fb7a58
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: testharness-computed-style
Lynx-Status: passing
Assert: Generated flex-direction computed-style assertions for text.target.
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
