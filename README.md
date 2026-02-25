# Lynx Examples

This repository is intended to showcase examples of Lynx.

## List of examples

- Tutorials
  - [`tutorial-gallery`]: An example shows how to use discoverPage
  - [`tutorial-bankcards`]: An example shows how to use Lynx in bankcards project
  - [`composing-elements`]: An example shows how to composing elements in ReactLynx
- Builtin Elements
  - [`event`]: An example shows how touch events work
  - [`image`]: An example shows how to use images
  - [`list`]: An example shows how to use reusable and scrollable container
  - [`scroll-view`]: An example shows how to use scrollable container
  - [`text`]: An example shows how to use text and inline-text
  - [`view`]: An example shows how to use view
  - [`frame`]: An example shows how to use frame
- XElement
  - [`input`]: An example shows how to use input
  - [`textarea`]: An example shows how to use textarea
  - [`overlay`]: An example shows how to use overlay
  - [`svg`]: An example shows how to use svg
- Styling
  - [`animation`]: Examples for using animation
  - [`css`]: Examples for using different CSS
  - [`layout`]: Examples of the layout related styling
- API
  - [`fetch`]: An example shows how to use fetch API
  - [`lazy-bundle`]: An example shows how code-splitting and lazy bundle works
- Web Platform
  - [`basic-usage`]: An example shows how to use Lynx Web Platform
- UI Components
  - [`action-sheet`]: An example shows how to make an ActionSheet
- A11y
  - [`accessibility`]: An example shows how to make App accessibility
- Performance APIs
  - [`performance-apis`]: An example shows how to listen an performance entry
- I18n
  - [`i18n`]: An example shows how to use i18n in Lynx

[`action-sheet`]: ./examples/action-sheet
[`animation`]: ./examples/animation
[`css`]: ./examples/css
[`event`]: ./examples/event
[`image`]: ./examples/image
[`layout`]: ./examples/layout
[`lazy-bundle`]: ./examples/lazy-bundle
[`list`]: ./examples/list
[`scroll-view`]: ./examples/scroll-view
[`text`]: ./examples/text
[`view`]: ./examples/view
[`frame`]: ./examples/frame
[`input`]: ./examples/input
[`textarea`]: ./examples/textarea
[`overlay`]: ./examples/overlay
[`svg`]: ./examples/svg
[`refresh`]: ./examples/refresh
[`title-bar-view`]: ./examples/title-bar-view
[`fetch`]: ./examples/fetch
[`basic-usage`]: ./examples/web-platform
[`accessibility`]: ./examples/accessibility
[`performance-apis`]: ./examples/performance-api
[`tutorial-gallery`]: ./examples/Gallery
[`tutorial-bankcards`]: ./examples/BankCards
[`composing-elements`]: ./examples/composing-elements
[`i18n`]: ./examples/i18n

## How to use

1. First, clone the current repository to your local:

```bash
git clone git@github.com:lynx-family/lynx-examples.git
```

2. Then, choose the example you need, such as the image example:

```bash
cd examples/image
```

3. Install the dependencies using `pnpm` or other package manager, then start the project:

```bash
# Use corepack to enable pnpm
corepack enable
pnpm i
pnpm run dev
```

4. You can fork the current project or copy the code from the current project to use it.

## How to use examples on the lynx-website

1. Publish your example to the npm registry.

2. Go to the project "packages/lynx-example-packages" directory on the lynx-website.

3. Update packages/lynx-example-packages/package.json dependencies

```json
"dependencies": {
    "@lynx-example/xxx": "xxx",
}
```

4. Install dependencies in the lynx-website root directory, then start the project:

```bash
pnpm i
pnpm run dev
```

5. Use it in your MDX files:

```jsx
import { Go } from "@lynx";

<Go
  example="xxx"
  defaultFile="src/App.tsx"
  img="xxx-example-preview.png"
/>;
```

For more details please see [`<Go/>`](https://github.com/lynx-family/lynx-website/blob/main/src/components/go/README.md)
