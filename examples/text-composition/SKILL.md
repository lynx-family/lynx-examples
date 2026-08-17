---
name: text-composition
description: Use when implementing or reviewing ReactLynx content that needs continuous text measurement, natural wrapping, nested text/image/view composition, truncation, vertical alignment, bidirectional text, or language-aware line breaking.
---

# Lynx Text Composition

Build a continuous text composition around one outer `<text>`. Treat that element as the owner of paragraph measurement and line layout.

## Workflow

1. Separate block layout from continuous text layout.
2. Use an outer `<view>` for the card, background, padding, and other block concerns.
3. Put the complete naturally wrapping paragraph in one outer `<text>`.
4. Nest `<text>` only when a span has different styling, semantics, or events.
5. Nest `<image>` directly for an inline image. Nest `<view>` for an atomic inline structure with multiple children.
6. Put paragraph properties such as `line-height`, `text-align`, `text-indent`, `text-maxline`, and truncation on the outer `<text>`.
7. Keep adjacent Chinese fragments adjacent. Write `{" "}` when a real space is required.
8. Verify narrow and wide containers, dynamic copy, font scaling, and every target platform.

## Canonical structure

```tsx
<view className="card">
  <text className="paragraph">
    {"Continuous body copy stays in one string. "}
    <text className="emphasis">{"Only distinct spans are nested."}</text>{" "}
    <image className="icon" src={icon} />{" "}
    <view className="badge">
      <text className="badgeDot">{"●"}</text>
      <text className="badgeLabel">{"Label"}</text>
    </view>
  </text>
</view>;
```

```css
.paragraph {
  overflow: hidden;
  font-size: 28rpx;
  line-height: 44rpx;
  text-align: left;
  text-overflow: ellipsis;
}

.icon,
.badge {
  vertical-align: center;
}

.badge {
  display: flex;
  flex-direction: row;
  align-items: center;
}
```

The nested position gives image/view nodes their inline identity. `display` on the badge controls only how the badge lays out its children.

## Guardrails

- Put every visible string inside `<text>`.
- Do not split a paragraph into flex rows or strings based on a design width.
- Do not use Web-only `display: inline`, `inline-block`, `inline-flex`, or `inline-grid` values.
- Do not rely on `flex`, `flex-grow`, or `flex-shrink` on inline nodes to allocate text-line space.
- Set `vertical-align` on each nested text/image/view that needs it; the property does not inherit.
- Do not set paragraph `line-height` on an inline child and expect it to change the paragraph line box.
- Preserve source state transitions and event boundaries when migrating regression cases.
- Replace private resources and retired host switches with public deterministic equivalents, and document the compatibility boundary instead of inventing an API.

## Review and validation

1. Read [README.md](README.md) for the complete guide, official documentation links, and the 24-case source mapping.
2. Use [src/components/TextCompositionArticle.tsx](src/components/TextCompositionArticle.tsx) as the production-oriented composition example.
3. Use [src/cases/registry.tsx](src/cases/registry.tsx) and the case implementations for focused regression inputs; historical bad cases are test fixtures, not recommended patterns.
4. Run:

   ```bash
   pnpm --filter @lynx-example/text-composition run build
   pnpm dprint check
   pnpm meta-updater --test
   ```

5. Capture each relevant case on a Lynx runtime. Confirm wrapping, truncation, events, direction, and vertical alignment rather than checking only that the page loads.
