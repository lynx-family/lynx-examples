import type * as Lynx from "@lynx-js/types";

type VideoObjectFit = "contain" | "cover" | "fill";
type VideoUIMethodMode = "queue" | "direct" | "latest";

declare module "@lynx-js/types" {
  interface IntrinsicElements extends Lynx.IntrinsicElements {
    video: Lynx.StandardProps & {
      src?: string;
      loop?: boolean;
      volume?: number;
      muted?: boolean;
      speed?: number;
      "object-fit"?: VideoObjectFit;
      mode?: VideoUIMethodMode;
      "timeupdate-interval"?: number;
      bindfirstframe?: (
        e: Lynx.BaseEvent<"bindfirstframe", { duration: number }>,
      ) => void;
      bindplaying?: (e: Lynx.BaseEvent<"bindplaying">) => void;
      bindpaused?: (e: Lynx.BaseEvent<"bindpaused">) => void;
      bindstopped?: (e: Lynx.BaseEvent<"bindstopped">) => void;
      bindtimeupdate?: (
        e: Lynx.BaseEvent<
          "bindtimeupdate",
          { current: number; duration: number }
        >,
      ) => void;
      bindended?: (e: Lynx.BaseEvent<"bindended">) => void;
      bindlooped?: (e: Lynx.BaseEvent<"bindlooped">) => void;
      binderror?: (
        e: Lynx.BaseEvent<
          "binderror",
          { errorCode: number; errorMsg: string }
        >,
      ) => void;
      bindbuffering?: (
        e: Lynx.BaseEvent<"bindbuffering", { buffering: number }>,
      ) => void;
    };
  }
}
