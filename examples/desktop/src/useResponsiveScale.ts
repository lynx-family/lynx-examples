import { useState } from "@lynx-js/react";
import type { LayoutChangeEvent } from "@lynx-js/types";

type ResponsiveScaleOptions = {
  baseWidth: number;
  baseHeight: number;
  maxScale?: number;
  minScale?: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function useResponsiveScale({
  baseWidth,
  baseHeight,
  maxScale = 1,
  minScale = 0.5,
}: ResponsiveScaleOptions) {
  const [scale, setScale] = useState(1);

  const handleLayoutChange = (event: LayoutChangeEvent) => {
    const { width, height } = event.detail;

    if (!width || !height) {
      return;
    }

    setScale(clamp(Math.min(width / baseWidth, height / baseHeight, maxScale), minScale, maxScale));
  };

  return {
    handleLayoutChange,
    scale,
  };
}
