import type { DotFieldProps, DotProps } from "./field.types.js";
import "./field.css";

/**
 * Dot consumes normalized, unitless params.
 * Layout and sizing is resolved via field-scoped CSS vars.
 */
function Dot({ x = 0, y = 0, s = 1, color, useAccent }: DotProps) {
  return (
    <view
      className="dot"
      /**
       * Inline CSS var reference: route accent color to a
       * field-scoped CSS token (`--dot-accent-color`)
       */
      style={`--x:${x}; --y:${y}; --s:${s}; background-color:${useAccent ? "var(--dot-accent-color)" : color}`}
    />
  );
}

/**
 * DotField defines the styling boundary for a dot-based field.
 * It provides a scoped coordinate system and field-level design tokens
 * (e.g. --field-size, --dot-size) via CSS variables.
 */
function DotField({
  fieldSize = 200,
  dotSize = 5,
  dotColor = "#f8f8f8",
  dotAccentColor = "#ffff00",
  children,
  bindtouchstart,
  bindtouchmove,
  bindtouchend,
  bindtouchcancel,
  bindlayoutchange,
}: DotFieldProps) {
  return (
    <view
      /* Styling boundary: inject field-level CSS tokens */
      style={`--field-size:${fieldSize}px; --dot-size:${dotSize}px; --dot-color:${dotColor}; --dot-accent-color:${dotAccentColor} `}
      className="dot-field"
      /* Interaction */
      bindtouchstart={bindtouchstart}
      bindtouchmove={bindtouchmove}
      bindtouchend={bindtouchend}
      bindtouchcancel={bindtouchcancel}
      bindlayoutchange={bindlayoutchange}
    >
      {children}
    </view>
  );
}

export { Dot, DotField };
