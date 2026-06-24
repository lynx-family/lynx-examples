import { useState } from "@lynx-js/react";

import { Switch, SwitchThumb, SwitchTrack } from "@lynx-js/lynx-ui";

export function SwitchSection() {
  const [checked, setChecked] = useState(true);

  return (
    <view className="section">
      <text className="section-title">Switch</text>
      <view className="section-content">
        <view className="row">
          <Switch className="switch" checked={checked} onChange={setChecked}>
            <SwitchTrack className="switch-track" />
            <SwitchThumb className="switch-thumb" />
          </Switch>
          <text className="row-label">Controlled: {checked ? "ON" : "OFF"}</text>
        </view>

        <view className="row">
          <Switch className="switch">
            <SwitchTrack className="switch-track" />
            <SwitchThumb className="switch-thumb" />
          </Switch>
          <text className="row-label">Uncontrolled</text>
        </view>

        <view className="row">
          <Switch className="switch" disabled defaultChecked>
            <SwitchTrack className="switch-track" />
            <SwitchThumb className="switch-thumb" />
          </Switch>
          <text className="row-label row-label-disabled">Disabled</text>
        </view>
      </view>
    </view>
  );
}
