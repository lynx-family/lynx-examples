import { useState } from "@lynx-js/react";

import { Radio, RadioGroupRoot, RadioIndicator } from "@lynx-js/lynx-ui";

const OPTIONS = ["Option A", "Option B", "Option C", "Option D"];

export function RadioGroupSection() {
  const [value, setValue] = useState(OPTIONS[0]);

  return (
    <view className="section">
      <text className="section-title">RadioGroup</text>
      <view className="section-content">
        <text className="row-label">Selected: {value}</text>
        <RadioGroupRoot value={value} onValueChange={setValue}>
          <view className="radio-group">
            {OPTIONS.map((option) => (
              <view key={option} className="row">
                <Radio className="radio-item" value={option}>
                  <RadioIndicator className="radio-indicator">
                    <view className="radio-dot" />
                  </RadioIndicator>
                </Radio>
                <text className="row-label">{option}</text>
              </view>
            ))}
          </view>
        </RadioGroupRoot>
      </view>
    </view>
  );
}
