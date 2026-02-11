import type { ReactNode } from "@lynx-js/react";
import type { LayoutChangeEvent, MouseEvent, TouchEvent } from "@lynx-js/types";

type DotProps = {
  /** Normalized x position in the field (0..1). */
  x?: number;

  /** Normalized y position in the field (0..1). */
  y?: number;

  /** Relative scale factor, resolved against `--dot-size`. Defaults to 1. */
  s?: number;

  /** Optional explicit color for this dot. */
  color?: string;

  /** Use the field-level accent color (`--dot-accent-color`). */
  useAccent?: boolean;
};

type DotFieldProps = {
  /** Field size in pixels (defines the coordinate space). */
  fieldSize?: number;

  /** Base dot size in pixels. */
  dotSize?: number;

  /** Default dot color (`--dot-color`). */
  dotColor?: string;

  /** Accent dot color (`--dot-accent-color`). */
  dotAccentColor?: string;

  /** Extra inline CSS applied at the field boundary. */
  style?: string;

  /** Field children (dots or other field-aware elements). */
  children?: ReactNode;

  /** Pointer (touch/mouse) handlers bound at the field level. */
  bindtouchstart?: (e: TouchEvent) => void;
  bindtouchmove?: (e: TouchEvent) => void;
  bindtouchend?: (e: TouchEvent) => void;
  bindtouchcancel?: (e: TouchEvent) => void;

  bindmousedown?: (e: MouseEvent) => void;
  bindmousemove?: (e: MouseEvent) => void;
  bindmouseup?: (e: MouseEvent) => void;
  /** Layout measurement handler for field coordinate mapping. */
  bindlayoutchange?: (e: LayoutChangeEvent) => void;
};

export type { DotFieldProps, DotProps };
