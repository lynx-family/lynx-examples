# Lynx Examples

This repository is intended to showcase examples of Lynx.

## List of examples

- Benchmarks
  - [`7guis`]: The 7GUIs benchmark — Counter, Temperature Converter, Flight Booker, Timer, CRUD, Circle Drawer, Cells
- Tutorials
  - [`hello-world`]: A minimal hello world example
  - [`tutorial-gallery`]: An example shows how to use discoverPage
  - [`tutorial-bankcards`]: An example shows how to use Lynx in bankcards project
  - [`composing-elements`]: An example shows how to composing elements in ReactLynx
  - [`design-guide`]: An example demonstrating design with Lynx capabilities
- Builtin Elements
  - [`event`]: An example shows how touch events work
  - [`image`]: An example shows how to use images
  - [`list`]: An example shows how to use reusable and scrollable container
  - [`scroll-view`]: An example shows how to use scrollable container
  - [`text`]: An example shows how to use text and inline-text
  - [`view`]: An example shows how to use view
  - [`frame`]: An example shows how to use frame
  - [`page`]: An example shows how to use page in Lynx
  - [`refresh`]: An example shows how to use `<refresh>` in Lynx
  - [`scroll-coordinator`]: An example shows how to use `<scroll-coordinator>` in Lynx
  - [`viewpager`]: An example shows how to use `<viewpager>` in Lynx
  - [`title-bar-view`]: An example shows how to use `<title-bar-view>` in Lynx
  - [`native-element`]: An example about using native element in Lynx
- XElement
  - [`input`]: An example shows how to use input
  - [`textarea`]: An example shows how to use textarea
  - [`overlay`]: An example shows how to use overlay
  - [`svg`]: An example shows how to use svg
- Styling
  - [`animation`]: Examples for using animation
  - [`css`]: Examples for using different CSS
  - [`layout`]: Examples of the layout related styling
  - [`tailwindcss`]: A settings UI with runtime theme switching using Tailwind CSS and CSS variables
- API
  - [`fetch`]: An example shows how to use fetch API
  - [`lazy-bundle`]: An example shows how code-splitting and lazy bundle works
  - [`external-bundle`]: An example shows how to use external bundle in Lynx
  - [`element-manipulation`]: An example shows how to manipulate elements in Lynx
  - [`lynx-api`]: An example shows how to use Lynx APIs
  - [`main-thread`]: An example shows how to use main thread scripts
  - [`local-storage`]: An example shows how to use local storage in Lynx
  - [`networking`]: An example shows Lynx networking abilities
  - [`react-lifecycle`]: An example shows ReactLynx lifecycle
- Web Platform
  - [`basic-usage`]: An example shows how to use Lynx Web Platform
- UI Components
  - [`action-sheet`]: An example shows how to make an ActionSheet
  - [`desktop`]: Desktop-oriented cursor demos with `cursor` and `mouse-cursor` entries
  - [`swiper`]: An example shows how to use main thread script for interaction
- A11y
  - [`accessibility`]: An example shows how to make App accessibility
- Performance
  - [`performance-apis`]: An example shows how to listen an performance entry
  - [`ifr`]: An example about Instant First-Frame Rendering (IFR) in Lynx
- I18n
  - [`i18n`]: An example shows how to use i18n in Lynx
- Third-party Integrations
  - [`with-solidjs`]: An example shows how to use Lynx with SolidJS
  - [`zustand`]: An example shows how to use zustand in Lynx
  - [`tanstack-router`]: An example shows how to use TanStack Router in Lynx

[`7guis`]: ./examples/7guis
[`action-sheet`]: ./examples/action-sheet
[`animation`]: ./examples/animation
[`css`]: ./examples/css
[`desktop`]: ./examples/desktop
[`design-guide`]: ./examples/design-guide
[`element-manipulation`]: ./examples/element-manipulation
[`event`]: ./examples/event
[`external-bundle`]: ./examples/external-bundle
[`fetch`]: ./examples/fetch
[`frame`]: ./examples/frame
[`hello-world`]: ./examples/hello-world
[`ifr`]: ./examples/ifr
[`image`]: ./examples/image
[`input`]: ./examples/input
[`i18n`]: ./examples/i18n
[`layout`]: ./examples/layout
[`lazy-bundle`]: ./examples/lazy-bundle
[`list`]: ./examples/list
[`local-storage`]: ./examples/local-storage
[`lynx-api`]: ./examples/lynx-api
[`main-thread`]: ./examples/main-thread
[`native-element`]: ./examples/native-element
[`networking`]: ./examples/networking
[`overlay`]: ./examples/overlay
[`page`]: ./examples/page
[`performance-apis`]: ./examples/performance-api
[`react-lifecycle`]: ./examples/react-lifecycle
[`refresh`]: ./examples/refresh
[`scroll-coordinator`]: ./examples/scroll-coordinator
[`scroll-view`]: ./examples/scroll-view
[`svg`]: ./examples/svg
[`swiper`]: ./examples/swiper
[`tailwindcss`]: ./examples/tailwindcss
[`tanstack-router`]: ./examples/tanstack-router
[`text`]: ./examples/text
[`textarea`]: ./examples/textarea
[`title-bar-view`]: ./examples/title-bar-view
[`tutorial-gallery`]: ./examples/Gallery
[`tutorial-bankcards`]: ./examples/BankCards
[`composing-elements`]: ./examples/composing-elements
[`view`]: ./examples/view
[`viewpager`]: ./examples/viewpager
[`basic-usage`]: ./examples/web-platform
[`with-solidjs`]: ./examples/with-solidjs
[`zustand`]: ./examples/zustand
[`accessibility`]: ./examples/accessibility

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
