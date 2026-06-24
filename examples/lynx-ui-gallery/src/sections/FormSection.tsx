import { useState } from "@lynx-js/react";

import {
  CheckboxIndicator,
  FormField,
  FormRoot,
  FormSubmitButton,
  Radio,
  RadioIndicator,
  SwitchThumb,
  SwitchTrack,
} from "@lynx-js/lynx-ui";

export function FormSection() {
  const [result, setResult] = useState("");

  return (
    <view className="section">
      <text className="section-title">Form</text>
      <view className="section-content">
        <FormRoot
          initialValues={{
            username: "",
            color: "red",
            agree: false,
            notify: false,
          }}
          onChanged={(values: Record<string, unknown>) => {
            setResult(JSON.stringify(values));
          }}
        >
          <view className="field">
            <text className="field-label">Username</text>
            <view className="input-container">
              <FormField
                as="Input"
                name="username"
                className="input"
                placeholder="Enter username"
              />
            </view>
          </view>

          <view className="field">
            <text className="field-label">Color</text>
            <FormField as="RadioGroupRoot" name="color">
              <view className="radio-group">
                {["red", "green", "blue"].map((c) => (
                  <view key={c} className="row">
                    <Radio className="radio-item" value={c}>
                      <RadioIndicator className="radio-indicator">
                        <view className="radio-dot" />
                      </RadioIndicator>
                    </Radio>
                    <text className="row-label">{c}</text>
                  </view>
                ))}
              </view>
            </FormField>
          </view>

          <FormField as="Checkbox" name="agree" className="checkbox">
            <CheckboxIndicator className="checkbox-indicator">
              <view className="checkmark" />
            </CheckboxIndicator>
            <text className="row-label">I agree to terms</text>
          </FormField>

          <view className="row">
            <FormField as="Switch" name="notify" className="switch">
              <SwitchTrack className="switch-track" />
              <SwitchThumb className="switch-thumb" />
            </FormField>
            <text className="row-label">Notifications</text>
          </view>

          <FormSubmitButton
            className="gallery-button"
            onSubmit={(values) => {
              setResult(JSON.stringify(values));
            }}
          >
            <view className="btn">
              <text className="btn-text">Submit</text>
            </view>
          </FormSubmitButton>
        </FormRoot>

        {result
          ? <text className="row-label">Result: {result}</text>
          : null}
      </view>
    </view>
  );
}
