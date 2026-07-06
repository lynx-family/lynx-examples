// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

export const ANIMAX_VIEW_ID = "animax-view";

export const ANIMAX_SHOWCASE_BASE = "https://tosv-sg.tiktok-row.org/obj/lynx-artifacts-oss-sg/animax/showcase_url";

export const BASIC_LOTTIE_SRC = `${ANIMAX_SHOWCASE_BASE}/logo.json`;

export const CONTROLS_SHAPE_LOTTIE_SRC = BASIC_LOTTIE_SRC;

export const BASIC_JSON_LOTTIE_SRC = `${ANIMAX_SHOWCASE_BASE}/case_json/animation.json`;

export const BASIC_LOOP_LOTTIE_SRC = `${ANIMAX_SHOWCASE_BASE}/case_shape_02/animation.json`;

export const ALPHA_VIDEO_LOTTIE_SRC = `${ANIMAX_SHOWCASE_BASE}/case_alpha_video/animation.json`;

export const CONTROLS_LOTTIE_SRC = `${ANIMAX_SHOWCASE_BASE}/case_alpha_video/animation.json`;

export const DYNAMIC_FONT_LOTTIE_SRC = `${ANIMAX_SHOWCASE_BASE}/case_alpha_video_mixed/animation.json`;

export const DYNAMIC_VIDEO_LOTTIE_SRC = `${ANIMAX_SHOWCASE_BASE}/case_alpha_video/animation.json`;

export const DYNAMIC_SUBMIT_LOTTIE_SRC = `${ANIMAX_SHOWCASE_BASE}/case_text/animation.json`;

export const DYNAMIC_TEXT_LOTTIE_SRC = `${ANIMAX_SHOWCASE_BASE}/case_text_03/animation.json`;

export const DYNAMIC_LAYER_LOTTIE_SRC = `${ANIMAX_SHOWCASE_BASE}/case_shape/animation.json`;

export const DYNAMIC_LAYER_WILDCARD_LOTTIE_SRC = `${ANIMAX_SHOWCASE_BASE}/case_shape_02/animation.json`;

export const EVENTS_LOTTIE_SRC = `${ANIMAX_SHOWCASE_BASE}/case_text_02/animation.json`;

export const EVENTS_TAP_LOTTIE_SRC = `${ANIMAX_SHOWCASE_BASE}/case_image/animation.json`;

export const EVENTS_UPDATE_LOTTIE_SRC = `${ANIMAX_SHOWCASE_BASE}/case_alpha_video_mixed/animation.json`;

export const PLAY_SEGMENT_LOTTIE_SRC = `${ANIMAX_SHOWCASE_BASE}/case_text_03/animation.json`;

export const METHODS_QUERY_LOTTIE_SRC = `${ANIMAX_SHOWCASE_BASE}/case_text/animation.json`;

export const PLAYBACK_PROPS_LOTTIE_SRC = `${ANIMAX_SHOWCASE_BASE}/case_shape_02/animation.json`;

export const FIRSTFRAME_POSTER_LOTTIE_SRC = `${ANIMAX_SHOWCASE_BASE}/case_text_02/animation.json`;

export const DYNAMIC_REPLACEMENT_IMAGE_URL = `${ANIMAX_SHOWCASE_BASE}/case_image/images/lifestyle_04-8b37a7fa.png`;

export const DYNAMIC_FONT_REPLACEMENT_URL = `${ANIMAX_SHOWCASE_BASE}/case_alpha_video_mixed/fonts/Arial-722a8714.ttf`;

export const DYNAMIC_VIDEO_REPLACEMENT_URL =
  `${ANIMAX_SHOWCASE_BASE}/case_alpha_video_mixed/videos/video_0_animax_logo_80pct_alpha_sbs-56900674.mp4`;

export type AnimaXMethod =
  | "play"
  | "pause"
  | "resume"
  | "stop"
  | "seek"
  | "playSegment"
  | "subscribeUpdateEvent"
  | "subscribeUpdateEvents"
  | "unsubscribeUpdateEvent"
  | "unsubscribeUpdateEvents"
  | "getDuration"
  | "getCurrentFrame"
  | "isAnimating";

export function invokeAnimaX(
  method: AnimaXMethod,
  params?: Record<string, unknown>,
  targetId = ANIMAX_VIEW_ID,
) {
  lynx
    .createSelectorQuery()
    .select(`#${targetId}`)
    .invoke({
      method,
      params,
      success(res) {
        console.log(`[animax] ${method} success`, JSON.stringify(res));
      },
      fail(res) {
        console.log(`[animax] ${method} fail`, JSON.stringify(res));
      },
    })
    .exec();
}

export function ceilFrame(value: number) {
  return Math.ceil(Number.isFinite(value) ? value : 0);
}

export function formatFrame(value: number) {
  return `${ceilFrame(value)}`;
}

export async function loadLottieJson(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to load lottie json: ${response.status}`);
  }

  return response.text();
}
