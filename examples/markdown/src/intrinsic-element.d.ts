import type * as Lynx from "@lynx-js/types";
import type { ReactNode } from "react";

type MarkdownStyle = Record<string, Record<string, unknown>>;
type MarkdownEffect = Record<string, unknown>;

interface MarkdownRect {
  left: number;
  right: number;
  top: number;
  bottom: number;
  width: number;
  height: number;
}

interface MarkdownTextBoundingRect {
  boundingRect: MarkdownRect;
  boxes: MarkdownRect[];
}

interface MarkdownLineStyle {
  lineType: "solid" | "dashed";
  color: string;
  width: string | number;
}

interface MarkdownMarkAttachment {
  startIndex: number;
  endIndex: number;
  indexType: "source" | "parsed";
  id?: string;
  clickable?: boolean;
  style: {
    color?: string;
    borderBottom?: MarkdownLineStyle;
  };
}

interface MarkdownSelectionChangeEvent {
  start: number;
  end: number;
  direction: "forward" | "backward" | "none";
}

declare module "@lynx-js/types" {
  interface IntrinsicElements extends Lynx.IntrinsicElements {
    markdown: {
      className?: string;
      id?: string;
      style?: string | Lynx.CSSProperties;
      children?: ReactNode;
      content: string;
      "content-id"?: string;
      "markdown-style"?: MarkdownStyle;
      "animation-type"?: "none" | "typewriter";
      "animation-velocity"?: number;
      "text-maxline"?: number;
      "initial-animation-step"?: number;
      "content-complete"?: boolean;
      "typewriter-dynamic-height"?: boolean;
      "text-selection"?: boolean;
      "text-mark-attachments"?: MarkdownMarkAttachment[];
      "content-range"?: number[];
      "markdown-effect"?: MarkdownEffect;
      "typewriter-height-transition-duration"?: number;
      "enable-gif"?: boolean;
      overflow?: "ellipsis" | "clip";
      binddrawStart?: (e: Lynx.BaseEvent) => void;
      binddrawEnd?: (e: Lynx.BaseEvent) => void;
      bindanimationStep?: (
        e: Lynx.BaseEvent<
          "bindanimationStep",
          { animationStep: number; maxAnimationStep: number }
        >,
      ) => void;
      bindoverflow?: (
        e: Lynx.BaseEvent<
          "bindoverflow",
          { type: "ellipsis" | "clip" }
        >,
      ) => void;
      bindlink?: (
        e: Lynx.BaseEvent<"bindlink", { url: string; content: string }>,
      ) => void;
      bindselectionchange?: (
        e: Lynx.BaseEvent<
          "bindselectionchange",
          MarkdownSelectionChangeEvent
        >,
      ) => void;
      bindimageTap?: (
        e: Lynx.BaseEvent<"bindimageTap", { url: string }>,
      ) => void;
      bindparseEnd?: (
        e: Lynx.BaseEvent<"bindparseEnd", { id: string }>,
      ) => void;
      bindtextClick?: (
        e: Lynx.BaseEvent<"bindtextClick", { id: string }>,
      ) => void;
    };
  }
}

export type { MarkdownEffect, MarkdownMarkAttachment, MarkdownStyle, MarkdownTextBoundingRect };
