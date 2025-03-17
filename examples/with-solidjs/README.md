# Use Lynx with SolidJS

This example shows how to use Lynx with SolidJS.

## Produce a Lynx App Bundle (`.lynx.bundle`)

This is done by using `TemplateWebpackPlugin` and `EncodeWebpackPlugin` in your rspack configuration.

These plugins are provided by Lynx via npm package `@lynx-js/template-webpack-plugin`.

NOTE: You will need something like `MarkMainThreadWebpackPlugin` to mark assets (scripts) running on main thread by adding a `"lynx:main-thread": true` to the asset's info.

```js
/**
 * @param {import("@rspack/core").Compiler} compiler
 */
((compiler) => {
  compiler.hooks.thisCompilation.tap(
    "MarkMainThreadWebpackPlugin",
    /**
     * @param {import("@rspack/core").Compilation} compilation
     */
    (compilation) => {
      compilation.hooks.processAssets.tap(
        "MarkMainThreadWebpackPlugin",
        () => {
          const asset = compilation.getAsset(`main.js`);
          compilation.updateAsset(asset.name, asset.source, {
            ...asset.info,
            "lynx:main-thread": true,
          });
        },
      );
    },
  );
});
```

## Write a custom renderer

You can write a custom renderer for SolidJS (available since SolidJS 1.2.0, see [`Releases/1.2.0`](https://github.com/solidjs/solid/releases/tag/v1.2.0)). We can use Lynx's [Element PAPI](https://lynxjs.org/api/engine/element-api.html) to work with it. Here is an example (See packages/solid/src/index.ts for complete implementation):

```js
export const {
  render: _render,
  effect,
  memo,
  createComponent,
  createElement,
  createTextNode,
  insertNode,
  insert,
  spread,
  setProp,
  mergeProps,
} = createRenderer({
  createElement(tag) {
    return __CreateElement(tag, pageId!);
  },
  createTextNode(value) {
    return __CreateRawText(value);
  },
  replaceText(textNode, value) {
    __SetAttribute(textNode, "text", value);
    __FlushElementTree(textNode);
  },
  ...
});
```

## Use the custom renderer

We put the custom renderer into a workspace package `@lynx-js/solid` and you use it like this:

```tsx
import { createSignal } from "@lynx-js/solid";
...
```

But, you will need to config the `babel-preset-solid` to use the custom renderer:

```json
{
  "presets": [
    [
      "@babel/preset-solid",
      {
        "moduleName": "@lynx-js/solid",
        "generate": "universal"
      }
    ]
  ]
}
```

## Build and Run

Now, build your app and run it:

```sh
$ npm run build
```

You will get a `.lynx.bundle` file in your output directory (the dist directory by default).

You can run this file using LynxExplorer.

## What to do next?

We have successfully integrated Lynx with SolidJS. But it is somehow a "single-thread" version. There are still some things you can do to take full advantage of Lynx:

1. Leverage [Lynx's Background Thread](https://lynxjs.org/guide/spec.html#background-scripting-thread-historically-known-as-js-thread).
   1. Support [Background Thread Event Handler](https://lynxjs.org/guide/spec.html#background-thread-event-handler).
   1. Move some part of SolidJS to the background thread to improve the performance.
   1. Automatically split user's code into main thread and background thread.
1. Support Lynx's `<list/>`. It is a virtualized list that can handle a large amount of data.
1. Do fast-refresh with rspack and [solid-refresh](https://github.com/solidjs/solid-refresh).
1. ...
