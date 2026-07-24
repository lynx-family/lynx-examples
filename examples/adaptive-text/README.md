# Adaptive Text

This example shrinks text in fixed steps until layout feedback reports that the final line no longer contains an ellipsis.

## Behavior

- Text starts at the configured maximum font size and remains hidden while measuring.
- Each overflowing layout pass decreases the size by the configured step.
- The component stops at the minimum size or when the text fits, then becomes visible.
- Line height follows the configured multiplier.
- Reset remounts the component at its maximum size.

## Commands

```bash
pnpm --filter @lynx-example/adaptive-text dev
pnpm --filter @lynx-example/adaptive-text build
```

This example intentionally excludes remote fonts and host-specific text services.
