# Lynx Text Composition Guide

This example migrates 24 top-level legacy text platform cases into 24 independently navigable ReactLynx pages. Each page represents one source case and preserves its comparison matrix, state transitions, and event entry points.

The central rule is simple: one outer `<text>` should own the text layout context for a continuous passage that needs shared measurement and natural wrapping.

## Run the example

```bash
pnpm --filter @lynx-example/text-composition run dev
pnpm --filter @lynx-example/text-composition run build
```

Main files:

- `src/components/TextCompositionArticle.tsx`: production-oriented composition.
- `src/components/CaseGallery.tsx`: previous/next navigation and isolated screenshot surface for 24 cases.
- `src/cases/registry.tsx`: the one-to-one source case registry.
- `src/cases/*Cases.tsx`: complete foundation, inline, truncation, and layout cases.
- `src/App.css`: paragraph properties, inline alignment, and regression styles.
- `src/mockData.ts`: deterministic copy and a data-URI inline image with no network request.
- `SKILL.md`: reusable implementation and review workflow for coding agents.

Use the Previous and Next controls to switch cases. The `01 / 24` progress label and source directory name identify each screenshot. Switching cases also resets the content scroll position.

> Regression pages such as `bad-case` and `text-align-right-bad-case` intentionally preserve historical invalid inputs. They verify compatibility and are not recommended production patterns. Use this guide and `TextCompositionArticle.tsx` for production code.

## Correct structure

```tsx
<view className="card">
  <text className="paragraph">
    {"Continuous copy with identical styling stays in one string. "}
    <text className="highlight">
      {"Only distinct content needs nested text."}
    </text>{" "}
    <image className="icon" src={icon} />{" "}
    <view className="badge">
      <text className="badge-dot">{"●"}</text>
      <text className="badge-label">{"Label"}</text>
    </view>
    {" End of paragraph."}
  </text>
</view>;
```

The outer view owns block layout such as the card, background, and padding. The outer text owns paragraph layout. Nested image and view nodes participate inline because they are children of that text.

## Composition rules

1. Use `<view>` for cards, backgrounds, padding, and other block layout.
2. Use one outer `<text>` as the paragraph layout owner for natural wrapping, line height, truncation, and alignment.
3. Nest `<text>` only when styling, events, semantics, or direction differ. Keep adjacent same-style copy in one string instead of splitting it at visual line boundaries.
4. Nest `<image>` directly for an inline image. Nest `<view>` for an atomic inline structure with multiple children.
5. Keep adjacent CJK fragments adjacent. Write `{" "}` when a real space is required instead of relying on JSX indentation.

## Paragraph properties

Set `line-height`, `text-align`, `text-indent`, `white-space`, `text-maxline`, and `text-overflow` on the outer text. `line-height` is a paragraph property; applying it to nested text does not change the paragraph line box.

```tsx
<text
  className="paragraph"
  text-maxline={expanded ? "-1" : "3"}
>
  {content}
  {!expanded && (
    <inline-truncation>
      <text className="more" bindtap={expand}>{"…More"}</text>
    </inline-truncation>
  )}
</text>;
```

```css
.paragraph {
  overflow: hidden;
  font-size: 28rpx;
  line-height: 44rpx;
  text-align: left;
  text-overflow: ellipsis;
}
```

Do not insert manual newlines based on a particular design width or split source data by visual line. Container width, copy, font metrics, font scale, and platform differences invalidate those boundaries.

## Inline display and vertical alignment

In Lynx, `display` controls how an element lays out its children. It does not determine whether that element is block or inline in its parent. Web values such as `display: inline`, `inline-block`, `inline-flex`, and `inline-grid` are not a migration strategy.

```tsx
<text className="paragraph">
  {"Body copy "}
  <view className="badge">
    <text className="dot">{"●"}</text>
    <text className="label">{"Low"}</text>
  </view>
  {" continues here."}
</text>;
```

```css
.badge {
  /* This display value only controls the badge children. */
  display: flex;
  flex-direction: row;
  align-items: center;

  /* Inline identity comes from nesting the view in the outer text. */
  vertical-align: center;
}
```

`vertical-align` applies to inline text, image, and view nodes. Its default is `baseline`, and it does not inherit. Set it explicitly on every inline node that needs a different alignment. Do not rely on `flex`, `flex-grow`, or `flex-shrink` on inline nodes to allocate text-line space.

## Events and dynamic state

Nested text, image, and view nodes may each own a tap handler. Do not split continuous copy into same-style nodes solely to attach events; wrap only the interactive semantic span.

Preserve relationships between source states when migrating regression cases. For example, tapping `inline-truncation-update` inverts `control` and sets another paragraph's `line` to `-1`. This example keeps that exact transition instead of rewriting it as a generic expand/collapse interaction.

## Internationalization and line breaking

- Keep mixed Arabic, English, CJK, and emoji in one outer text when they belong to the same paragraph.
- Set `direction: rtl | ltr` on the paragraph text when direction must be forced. Let ordinary dynamic content use direction inference.
- Test `word-break: keep-all` and `hyphens: auto` with real language samples because they change available break points.
- Prefer `text-align: start/end` for direction-aware dynamic copy instead of hard-coded left/right alignment.

## Source case mapping

| #  | Source case                    | Target component                | Preserved coverage                                                          |
| -- | ------------------------------ | ------------------------------- | --------------------------------------------------------------------------- |
| 01 | `bad-case`                     | `BadCase`                       | counter/slot, gradient updates, overflow, maxlength, decoration             |
| 02 | `basic`                        | `BasicCase`                     | alignment, 100–800/bold, font style, decoration, single/multiple shadows    |
| 03 | `bidi-text`                    | `BidiTextCase`                  | five auto/LTR/RTL inputs, inline view, single-line truncation               |
| 04 | `boring-layout`                | `BoringLayoutCase`              | nowrap, max-content, line height, alignment, CJK, inline view, empty text   |
| 05 | `event-with-padding`           | `EventWithPaddingCase`          | three counters and six padding/margin/border hit-region inputs              |
| 06 | `font-family-weight`           | `FontFamilyWeightCase`          | 800/400, public font fallbacks, nested italic regression sentence           |
| 07 | `hyphens-auto`                 | `HyphensAutoCase`               | auto/none with and without soft hyphens                                     |
| 08 | `inline-element-align-center`  | `InlineElementAlignCenterCase`  | single-line text/image/view composition and centering                       |
| 09 | `inline-text`                  | `InlineTextCase`                | concatenation, sizes, color/gradient inheritance and overrides              |
| 10 | `inline-text-background-image` | `InlineTextBackgroundImageCase` | six maxline, alignment, line-height, background, and custom-tail inputs     |
| 11 | `inline-truncation`            | `InlineTruncationCase`          | height/line-height, overflow, empty content, percentage tails, flex sibling |
| 12 | `inline-truncation-event`      | `InlineTruncationEventCase`     | LTR/RTL by truncation/view/image/text across eight states                   |
| 13 | `inline-truncation-rtl`        | `InlineTruncationRtlCase`       | 16 direction, maxline, tail, emoji, and vertical-align inputs               |
| 14 | `inline-truncation-update`     | `InlineTruncationUpdateCase`    | inverted `control`, `line=-1`, five inline views, and custom tail           |
| 15 | `layer-basic`                  | `LayerBasicCase`                | independent basic matrix and retired renderer boundary                      |
| 16 | `layer-inline-text`            | `LayerInlineTextCase`           | independent inline-text matrix and retired renderer boundary                |
| 17 | `layer-multi-line`             | `LayerMultiLineCase`            | unlimited, two-line, four-line, nowrap, and ellipsis                        |
| 18 | `multi-line`                   | `MultiLineCase`                 | tap toggle between `1` and empty plus four static comparisons               |
| 19 | `multiple-font-family`         | `MultipleFontFamilyCase`        | seven font orders and empty-family boundaries                               |
| 20 | `text-align-right-bad-case`    | `TextAlignRightBadCase`         | fixed sibling width, outer border/margin, inner right alignment             |
| 21 | `text-indent`                  | `TextIndentCase`                | percentage, small, none, large, max-content, and fixed-width inputs         |
| 22 | `transform`                    | `TransformCase`                 | 5rad, transform origin, top/left, and 0.5 scale                             |
| 23 | `white-space`                  | `WhiteSpaceCase`                | normal long copy and nowrap copy with a source newline                      |
| 24 | `word-break-keep-all`          | `WordBreakKeepAllCase`          | keep-all/normal comparison using the same multilingual copy                 |

### Public compatibility boundaries

- The legacy MiniApp DSL becomes ReactLynx JSX. Legacy `inline-text` and `inline-image` become nested `<text>` and `<image>` elements.
- System font fallbacks and a deterministic data URI replace private fonts, domains, and large source images while preserving order, sizing, and consumption behavior.
- The current public page API does not expose `enableTextLayerRender`, `enableTextBoringLayout`, or the retired `text-vertical-align` property. Corresponding pages preserve the visible inputs and display an explicit compatibility note.
- Host lifecycle logging is outside this public example. Component state and tap events remain represented.

## Review checklist

- [ ] Every visible string is inside `<text>`.
- [ ] A continuous naturally wrapping passage has one outer `<text>`.
- [ ] No copy is split or manually wrapped for one fixed design width.
- [ ] Adjacent same-style copy is not divided into meaningless nodes.
- [ ] Inline image/view identity comes from nesting inside `<text>`.
- [ ] An inline view's `display` value only controls its own children.
- [ ] `vertical-align` is set on each relevant inline text/image/view and is not assumed to inherit.
- [ ] Paragraph `line-height`, `text-align`, `text-maxline`, and truncation live on the outer text.
- [ ] Inline nodes do not depend on flex sizing or Web `display: inline-*` behavior.
- [ ] Wrapping and vertical alignment are verified across widths, dynamic copy, font scaling, Android, iOS, and HarmonyOS.

## Official references

- [Lynx Typography](https://lynxjs.org/next/guide/styling/text-and-typography.html): visible text belongs in `<text>`; nest text/image/view for mixed content.
- [Lynx `<text>` element](https://lynxjs.org/api/elements/built-in/text.html): `<text>` creates an inline-formatting-like layout context; nested `<view>` participates as an inline view.
- [Lynx `display`](https://lynxjs.org/next/api/css/properties/display.html): Lynx does not support Web block/inline and inline-* display values; display controls child layout.
- [Lynx `vertical-align`](https://lynxjs.org/next/api/css/properties/vertical-align.html): the property applies to inline text/image/view, defaults to `baseline`, and does not inherit.
- [Lynx `line-height`](https://lynxjs.org/next/api/css/properties/line-height.html): line height is a paragraph property and has no effect on inline text.

## Non-goals

- Do not reproduce retired renderer backend switches.
- Do not depend on business networks, host services, analytics, or private font resources.
- Do not treat one platform screenshot as cross-platform acceptance. The Android LynxView captures verify this build and its key layout states; run the platform matrix on the corresponding clients.
