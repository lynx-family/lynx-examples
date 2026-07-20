import { useState } from "@lynx-js/react";

import { SliderIndicator, SliderRoot, SliderThumb, SliderTrack } from "@lynx-js/lynx-ui";

export function SliderSection() {
  const [value, setValue] = useState(0.5);
  const [steppedValue, setSteppedValue] = useState(0.5);

  return (
    <view className="section">
      <text className="section-title">Slider</text>
      <view className="section-content">
        <text className="row-label">Value: {Math.round(value * 100)}%</text>
        <SliderRoot
          className="slider-root"
          defaultValue={0.5}
          onValueChange={(v: number) => setValue(v)}
        >
          <SliderTrack className="slider-track">
            <SliderIndicator className="slider-indicator" />
            <SliderThumb className="slider-thumb-wrapper">
              <view className="slider-thumb" />
            </SliderThumb>
          </SliderTrack>
        </SliderRoot>

        <text className="row-label">
          Stepped (10%): {Math.round(steppedValue * 100)}%
        </text>
        <SliderRoot
          className="slider-root"
          value={steppedValue}
          step={0.1}
          onValueChange={(v: number) => setSteppedValue(v)}
        >
          <SliderTrack className="slider-track">
            <SliderIndicator className="slider-indicator" />
            <SliderThumb className="slider-thumb-wrapper">
              <view className="slider-thumb" />
            </SliderThumb>
          </SliderTrack>
        </SliderRoot>

        <text className="row-label">Disabled</text>
        <SliderRoot className="slider-root" defaultValue={0.3} disabled>
          <SliderTrack className="slider-track">
            <SliderIndicator className="slider-indicator" />
            <SliderThumb className="slider-thumb-wrapper">
              <view className="slider-thumb" />
            </SliderThumb>
          </SliderTrack>
        </SliderRoot>
      </view>
    </view>
  );
}
