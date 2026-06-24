import { useState } from "@lynx-js/react";

import { Checkbox, CheckboxIndicator } from "@lynx-js/lynx-ui";

export function CheckboxSection() {
  const [checked, setChecked] = useState(false);
  const [items, setItems] = useState<string[]>(["Apple"]);

  const FRUITS = ["Apple", "Banana", "Orange"];
  const allSelected = items.length === FRUITS.length;

  return (
    <view className="section">
      <text className="section-title">Checkbox</text>
      <view className="section-content">
        <view className="row">
          <Checkbox
            className="checkbox"
            checked={checked}
            onChange={(value: boolean) => setChecked(value)}
          >
            <CheckboxIndicator className="checkbox-indicator">
              <view className="checkmark" />
            </CheckboxIndicator>
          </Checkbox>
          <text className="row-label">{checked ? "Checked" : "Unchecked"}</text>
        </view>

        <text className="subsection-title">Multi-Select</text>
        <view className="row">
          <Checkbox
            className="checkbox"
            checked={allSelected}
            indeterminate={items.length > 0 && !allSelected}
            onChange={(val: boolean) => setItems(val ? FRUITS : [])}
          >
            <CheckboxIndicator className="checkbox-indicator">
              <view className={allSelected ? "checkmark" : "indeterminate-mark"} />
            </CheckboxIndicator>
          </Checkbox>
          <text className="row-label">Select All</text>
        </view>
        {FRUITS.map((fruit) => (
          <view key={fruit} className="row row-indent">
            <Checkbox
              className="checkbox"
              checked={items.includes(fruit)}
              onChange={(val: boolean) => {
                setItems((prev) => val ? [...prev, fruit] : prev.filter((x) => x !== fruit));
              }}
            >
              <CheckboxIndicator className="checkbox-indicator">
                <view className="checkmark" />
              </CheckboxIndicator>
            </Checkbox>
            <text className="row-label">{fruit}</text>
          </view>
        ))}
      </view>
    </view>
  );
}
