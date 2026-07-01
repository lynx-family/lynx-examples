# @lynx-example/animax

Examples showing how to use `<animax-view>` in Lynx.

```bash
pnpm --filter @lynx-example/animax run dev
```

## Examples

- `basic`: load a remote animation with autoplay.
- `basic-json`: render animation data through the `json` prop.
- `basic-loop`: compare `loop` and `loop-count`.
- `controls`: build player controls with play, pause, resume, stop, progress, and frame-by-frame seek.
- `events`: handle `ready`, `firstframe`, `start`, `repeat`, `update`, `fps`, `error`, and `completion`.
- `events-update`: subscribe to update frames and handle `bindupdate`.
- `playsegment`: call `playSegment` with integer frame bounds.
- `methods-query`: call `getDuration`, `getCurrentFrame`, and `isAnimating`.
- `playback-props`: configure `speed`, `start-frame`, `end-frame`, `auto-reverse`, and `progress`.
- `firstframe-poster`: hide a poster after `bindfirstframe`.
- `dynamic-resource-font`: update a font resource by font name.
- `dynamic-resource-video`: update an alpha video resource by video id.
- `dynamic-resource-submit`: stage a resource update and submit it.
- `dynamic-text-layer`: update text value, size, color, and frame-scoped text.
- `dynamic-layer-property`: update layer visibility and transform properties.
- `events-tap`: handle layer tap callbacks with `bindtaplayers`.
