import type { DotFieldProps, DotProps } from "./field.types.js";
import "./field.css";

/**
 * Dot consumes normalized, unitless params.
 * Positioning and sizing are resolved via field-scoped CSS vars.
 */
function Dot({ x = 0, y = 0, s = 1, color, useAccent }: DotProps) {
  return (
    <view
      className="dot"
      /**
       * Inline CSS variables:
       * route accent color to a field-scoped CSS token
       * (`--dot-accent-color`), rather than computing it in JS
       */
      style={`--x:${x}; --y:${y}; --s:${s}; background-color:${useAccent ? "var(--dot-accent-color)" : color}`}
    />
  );
}

/**
 * DotField defines the styling boundary for a dot-based field.
 * Default field-level tokens (e.g. `--field-size`, `--dot-size`) live in CSS;
 * JS only injects token overrides when provided.
 */
function DotField({
  fieldSize,
  dotSize,
  dotColor,
  dotAccentColor,
  style,
  children,
  ...rest // Interaction Handlers
}: DotFieldProps) {
  const styleParts: string[] = [];

  // Token overrides: only write when the caller provides a value.
  if (fieldSize != null) styleParts.push(`--field-size:${fieldSize}px`);
  if (dotSize != null) styleParts.push(`--dot-size:${dotSize}px`);
  if (dotColor) styleParts.push(`--dot-color:${dotColor}`);
  if (dotAccentColor) styleParts.push(`--dot-accent-color:${dotAccentColor}`);

  const mergedStyle = style
    ? `${styleParts.join("; ")}; ${style}`
    : styleParts.join("; ");

  return (
    <view
      style={mergedStyle}
      className="dot-field"
      {...rest}
    >
      {children}
    </view>
  );
}

export { Dot, DotField };
