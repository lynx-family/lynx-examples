import { useState } from "@lynx-js/react";

import { Input, TextArea } from "@lynx-js/lynx-ui";

export function InputSection() {
  const [controlledValue, setControlledValue] = useState("Hello");

  return (
    <view className="section">
      <text className="section-title">Input & TextArea</text>
      <view className="section-content">
        <view className="field">
          <text className="field-label">Basic Input</text>
          <Input className="input" placeholder="Type here..." />
        </view>

        <view className="field">
          <text className="field-label">Controlled: {controlledValue}</text>
          <Input
            className="input"
            value={controlledValue}
            onInput={setControlledValue}
            placeholder="Controlled input"
          />
        </view>

        <view className="field">
          <text className="field-label">TextArea</text>
          <view className="textarea-wrap">
            <TextArea className="textarea" placeholder="Write something..." />
          </view>
        </view>
      </view>
    </view>
  );
}
