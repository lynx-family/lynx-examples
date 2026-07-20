import * as Lynx from "@lynx-js/types";

declare module "@lynx-js/types" {
  interface IntrinsicElements extends Lynx.IntrinsicElements {
    "scroll-coordinator": {
      style?: string | Lynx.CSSProperties;
      children?: ReactNode;
      "refresh-mode"?: "fold" | "page" | "none";
      bounces?: boolean;
    };
    "scroll-coordinator-toolbar": {
      style?: string | Lynx.CSSProperties;
      children?: ReactNode;
    };
    "scroll-coordinator-header": {
      style?: string | Lynx.CSSProperties;
      children?: ReactNode;
    };
    "scroll-coordinator-slot": {
      style?: string | Lynx.CSSProperties;
      children?: ReactNode;
    };
    "scroll-coordinator-slot-drag": {
      style?: string | Lynx.CSSProperties;
      children?: ReactNode;
    };
    refresh: {
      "enable-refresh"?: boolean;
      ref?: unknown;
      style?: string | Lynx.CSSProperties;
      bindstartrefresh?: (e: { detail: {} }) => void;
      children?: ReactNode;
    };
    "refresh-header": {
      style?: string | Lynx.CSSProperties;
      children?: ReactNode;
    };
    viewpager: {
      style?: string | Lynx.CSSProperties;
      children?: ReactNode;
      bindchange?: (e: { detail: { index: number } }) => void;
      bindwillchange?: (e: { detail: { index: number } }) => void;
    };
    "viewpager-item": {
      style?: string | Lynx.CSSProperties;
      children?: ReactNode;
    };
  }
}
