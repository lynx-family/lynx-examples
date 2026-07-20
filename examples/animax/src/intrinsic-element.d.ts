import type * as Lynx from "@lynx-js/types";

export interface AnimaXParam {
  animationID: string;
  current: number;
  total: number;
  loopIndex: number;
}

export interface AnimaXReadyParam extends AnimaXParam {
  elementID: string;
}

export interface AnimaXFPSParam extends AnimaXParam {
  fps: number;
  max_drop_rate: number;
}

export interface AnimaXErrorParam {
  code: number;
  data: string;
}

export interface AnimaXTapParam extends AnimaXParam {
  layerList: Array<string>;
}

type AnimaXObjectFit = "contain" | "cover" | "center" | "fill";

declare module "@lynx-js/types" {
  interface IntrinsicElements extends Lynx.IntrinsicElements {
    "animax-view": Lynx.StandardProps & {
      src?: string;
      "src-format"?: string;
      "src-polyfill"?: Record<string, string> | string;
      json?: string;
      speed?: number;
      autoplay?: boolean;
      "start-frame"?: number;
      "end-frame"?: number;
      "auto-reverse"?: boolean;
      progress?: number;
      loop?: boolean;
      "loop-count"?: number;
      objectfit?: AnimaXObjectFit;
      "fps-event-interval"?: number;
      "max-frame-rate"?: number;
      keeplastframe?: boolean;
      "ignore-attach-status"?: boolean;
      "ignore-lynx-lifecycle"?: boolean;
      "dynamic-resource"?: boolean;
      "android-enable-screenshot"?: boolean;
      bindcompletion?: (
        e: Lynx.BaseEvent<"bindcompletion", AnimaXParam>,
      ) => void;
      bindstart?: (e: Lynx.BaseEvent<"bindstart", AnimaXParam>) => void;
      bindrepeat?: (e: Lynx.BaseEvent<"bindrepeat", AnimaXParam>) => void;
      bindcancel?: (e: Lynx.BaseEvent<"bindcancel", AnimaXParam>) => void;
      bindready?: (
        e: Lynx.BaseEvent<"bindready", AnimaXReadyParam>,
      ) => void;
      bindupdate?: (e: Lynx.BaseEvent<"bindupdate", AnimaXParam>) => void;
      binderror?: (e: Lynx.BaseEvent<"binderror", AnimaXErrorParam>) => void;
      bindfps?: (e: Lynx.BaseEvent<"bindfps", AnimaXFPSParam>) => void;
      bindfirstframe?: (
        e: Lynx.BaseEvent<"bindfirstframe", AnimaXParam>,
      ) => void;
      bindtaplayers?: (
        e: Lynx.BaseEvent<"bindtaplayers", AnimaXTapParam>,
      ) => void;
    };
  }
}
