# Adapted Tests

This directory contains WPT CSS tests adapted for the Lynx CSS engine.

## Organization

One directory per CSS module:

```
tests/
├── css-flexbox/          # Flexbox layout tests
├── css-grid/             # Grid layout tests
├── css-position/         # Positioning tests
├── css-display/          # Display property tests
├── css-sizing/           # Box sizing tests
├── css-backgrounds/      # Background and border tests
├── css-color/            # Color tests
└── ...
```

## File Naming

- `lynx-{original-name}-{number}.ttml` - Adapted test
- `support/` - Support files (images, fonts, etc.)

## Metadata

Every adapted test must include a metadata block:

```html
<!--
Source: imported/wpt-upstream/css/css-flexbox/flex-direction-001.html
WPT-Revision: abc1234
Adapted-By: agent
Adapted-Date: 2026-05-11
Reference-Mode: web-test-render
Lynx-Status: passing
-->
```

Status values:
- `passing` - Test passes on Lynx
- `failing` - Test fails on Lynx (document why)
- `skipped` - Test skipped (document reason)
- `partial` - Partially passes

## Adding New Tests

1. Import from upstream: `./scripts/import-wpt-tests.sh css/css-module`
2. Copy relevant tests to `tests/css-module/`
3. Adapt for Lynx (see docs/adaptation-guide.md)
4. Add metadata
5. Run validation: `./scripts/validate-tests.py`
6. Commit with message: `import: css-module tests from WPT @revision`
